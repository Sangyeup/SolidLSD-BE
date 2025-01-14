# -*- coding: utf-8 -*-
import os
import json
from multiprocessing import Process
from multiprocessing.pool import ThreadPool

import falcon
from web3 import Web3

from .model import Pair
from app.assets import Assets, Token
from app.gauges import Gauge
from app.misc import JSONEncoder
from app.settings import CACHE, LOGGER


class Pairs(object):
    """Handles our liquidity pools/pairs"""
    # Seconds to expire the cache, a bit longer than the syncer schedule...

    CACHE_KEY = 'pairs:json'
    
    @classmethod
    def serialize(cls):
        pairs = []
        
        Token.from_tokenlists()
        Assets.recache()

        with ThreadPool(int(os.getenv('SYNC_MAX_THREADS', 4))) as pool:
            addresses = Pair.chain_addresses()
            pool.map(Pair.from_chain, addresses)
            pool.close()
            pool.join()

        for pair in Pair.all():
            data = pair._data
            data['token0'] = Token.find(pair.token0_address)._data
            data['token1'] = Token.find(pair.token1_address)._data

            if pair.gauge_address:
                gauge = Gauge.find(pair.gauge_address)
                data['gauge'] = gauge._data
                data['gauge']['bribes'] = []

                for (token_addr, reward_ammount) in gauge.rewards:
                    data['gauge']['bribes'].append(
                        dict(
                            token=Token.find(token_addr)._data,
                            reward_ammount=float(reward_ammount),
                            # TODO: Backwards compat...
                            rewardAmmount=float(reward_ammount)
                        )
                    )

            pairs.append(data)

        return pairs
    


    @classmethod
    def recache(cls):
        pairs = json.dumps(dict(data=cls.serialize()), cls=JSONEncoder)
        CACHE.set(cls.CACHE_KEY, pairs)
        LOGGER.debug('Cache updated for %s.', cls.CACHE_KEY)

        return pairs

    def resync(self, pair_address, gauge_address):
        """Resyncs a pair based on it's address or gauge address."""
        if Web3.isAddress(gauge_address):
            old_pair = Pair.get(
                Pair.gauge_address == str(gauge_address).lower()
            )
            Pair.from_chain(old_pair.address)
        elif Web3.isAddress(pair_address):
            Pair.from_chain(pair_address)
        else:
            return

        Pairs.recache()

    def on_get(self, req, resp):
        """Returns cached liquidity pools/pairs"""
       
        pairs = Pairs.recache()
        resp.status = falcon.HTTP_200
        resp.text = pairs
