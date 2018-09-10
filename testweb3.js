var Web3=require('web3');
var net = require('net');
var web3 = new Web3(new Web3.providers.IpcProvider('/Users/yinchen/Library/Ethereum/my-eth-chain/myDataDir/geth.ipc', net));
web3.eth.getAccounts(console.log);
web3.eth.getBalance(web3.eth.coinbase,console.log)
