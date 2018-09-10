var Web3=require('web3¡¦);
var net = require(¡¥net¡¦);
var web3 = new Web3('/Users/yinchen/Library/Ethereum/geth.ipc', net);
web3.eth.getAccounts().then(console.log);
