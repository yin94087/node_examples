var Web3 = require('web3');

// truffle develop
// web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));

// ganache
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// CentOS 6.9, Rinkeby node, 210.70.80.221:8545 at Asia University
// web3 = new Web3(new Web3.providers.HttpProvider("http://210.70.80.221:8545"));

// WebsocketProvider
// web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8546"));


process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});


