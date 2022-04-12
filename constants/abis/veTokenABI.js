module.exports = [{"name":"Deposit","inputs":[{"name":"provider","type":"address","indexed":true},{"name":"tokenId","type":"uint256","indexed":false},{"name":"value","type":"uint256","indexed":false},{"name":"locktime","type":"uint256","indexed":true},{"name":"type","type":"int128","indexed":false},{"name":"ts","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Withdraw","inputs":[{"name":"provider","type":"address","indexed":true},{"name":"tokenId","type":"uint256","indexed":false},{"name":"value","type":"uint256","indexed":false},{"name":"ts","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Supply","inputs":[{"name":"prevSupply","type":"uint256","indexed":false},{"name":"supply","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"name":"sender","type":"address","indexed":true},{"name":"receiver","type":"address","indexed":true},{"name":"tokenId","type":"uint256","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true},{"name":"approved","type":"address","indexed":true},{"name":"tokenId","type":"uint256","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"name":"owner","type":"address","indexed":true},{"name":"operator","type":"address","indexed":true},{"name":"approved","type":"bool","indexed":false}],"anonymous":false,"type":"event"},{"stateMutability":"nonpayable","type":"constructor","inputs":[{"name":"token_addr","type":"address"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_version","type":"string"},{"name":"tokenizer","type":"address"}],"outputs":[]},{"stateMutability":"view","type":"function","name":"supportsInterface","inputs":[{"name":"_interfaceID","type":"bytes32"}],"outputs":[{"name":"","type":"bool"}],"gas":2575},{"stateMutability":"view","type":"function","name":"get_last_user_slope","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"int128"}],"gas":4883},{"stateMutability":"view","type":"function","name":"user_point_history__ts","inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_idx","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":2686},{"stateMutability":"view","type":"function","name":"locked__end","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":2671},{"stateMutability":"view","type":"function","name":"balanceOf","inputs":[{"name":"_owner","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3241},{"stateMutability":"view","type":"function","name":"ownerOf","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":2840},{"stateMutability":"view","type":"function","name":"getApproved","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":5067},{"stateMutability":"view","type":"function","name":"isApprovedForAll","inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"outputs":[{"name":"","type":"bool"}],"gas":3202},{"stateMutability":"view","type":"function","name":"tokenByIndex","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":4904},{"stateMutability":"view","type":"function","name":"tokenOfOwnerByIndex","inputs":[{"name":"_owner","type":"address"},{"name":"_tokenIndex","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":5822},{"stateMutability":"view","type":"function","name":"isApprovedOrOwner","inputs":[{"name":"_spender","type":"address"},{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":8255},{"stateMutability":"nonpayable","type":"function","name":"transferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"outputs":[],"gas":368295},{"stateMutability":"nonpayable","type":"function","name":"safeTransferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"outputs":[],"gas":385315},{"stateMutability":"nonpayable","type":"function","name":"safeTransferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"outputs":[],"gas":385315},{"stateMutability":"nonpayable","type":"function","name":"toggleBlockTransfers","inputs":[{"name":"toggle","type":"bool"}],"outputs":[],"gas":35910},{"stateMutability":"nonpayable","type":"function","name":"approve","inputs":[{"name":"_approved","type":"address"},{"name":"_tokenId","type":"uint256"}],"outputs":[],"gas":46886},{"stateMutability":"nonpayable","type":"function","name":"setApprovalForAll","inputs":[{"name":"_operator","type":"address"},{"name":"_approved","type":"bool"}],"outputs":[],"gas":39683},{"stateMutability":"nonpayable","type":"function","name":"merge","inputs":[{"name":"_from","type":"uint256"},{"name":"_to","type":"uint256"}],"outputs":[],"gas":74710655},{"stateMutability":"nonpayable","type":"function","name":"checkpoint","inputs":[],"outputs":[],"gas":37283820},{"stateMutability":"nonpayable","type":"function","name":"deposit_for","inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_value","type":"uint256"}],"outputs":[],"gas":37476747},{"stateMutability":"nonpayable","type":"function","name":"create_lock","inputs":[{"name":"_value","type":"uint256"},{"name":"_lock_duration","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":37666096},{"stateMutability":"nonpayable","type":"function","name":"increase_amount","inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_value","type":"uint256"}],"outputs":[],"gas":37479990},{"stateMutability":"nonpayable","type":"function","name":"increase_unlock_time","inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_lock_duration","type":"uint256"}],"outputs":[],"gas":37487308},{"stateMutability":"nonpayable","type":"function","name":"withdraw","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[],"gas":37474130},{"stateMutability":"view","type":"function","name":"tokenURI","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"string"}],"gas":28944},{"stateMutability":"view","type":"function","name":"balanceOfNFT","inputs":[{"name":"_tokenId","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":13819},{"stateMutability":"view","type":"function","name":"balanceOfNFT","inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_t","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":13819},{"stateMutability":"view","type":"function","name":"balanceOfAtNFT","inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_block","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":794055},{"stateMutability":"view","type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":905686},{"stateMutability":"view","type":"function","name":"totalSupply","inputs":[{"name":"t","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":905686},{"stateMutability":"view","type":"function","name":"totalSupplyAt","inputs":[{"name":"_block","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":1288448},{"stateMutability":"view","type":"function","name":"token","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":3300},{"stateMutability":"view","type":"function","name":"supply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3330},{"stateMutability":"view","type":"function","name":"locked","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"tuple","components":[{"name":"amount","type":"int128"},{"name":"end","type":"uint256"}]}],"gas":5632},{"stateMutability":"view","type":"function","name":"epoch","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3390},{"stateMutability":"view","type":"function","name":"point_history","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"tuple","components":[{"name":"bias","type":"int128"},{"name":"slope","type":"int128"},{"name":"ts","type":"uint256"},{"name":"blk","type":"uint256"}]}],"gas":9854},{"stateMutability":"view","type":"function","name":"user_point_history","inputs":[{"name":"arg0","type":"uint256"},{"name":"arg1","type":"uint256"}],"outputs":[{"name":"","type":"tuple","components":[{"name":"bias","type":"int128"},{"name":"slope","type":"int128"},{"name":"ts","type":"uint256"},{"name":"blk","type":"uint256"}]}],"gas":9999},{"stateMutability":"view","type":"function","name":"user_point_epoch","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"uint256"}],"gas":3595},{"stateMutability":"view","type":"function","name":"slope_changes","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"int128"}],"gas":3625},{"stateMutability":"view","type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":13829},{"stateMutability":"view","type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":11588},{"stateMutability":"view","type":"function","name":"version","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":11618},{"stateMutability":"view","type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":3630},{"stateMutability":"view","type":"function","name":"tokenBaseURI","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":18491}]
