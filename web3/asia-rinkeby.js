var Web3 = require('web3');


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://210.70.80.221:8485"));
}
// Write to the console the script will run shortly.
console.log('Getting Ethereum address info.....');

console.log(web3.eth.accounts);
console.log(web3.version);
console.log(web3.eth.blockNumber);

// Account address
var addr = ('0x702De911FdA2E4BEAe6267B4B9db8Bc1210F09Eb');

// Contract and Contract address
var abi = [];
var contract_addr = '0x10D80133c467fD653BD801e2992cB7A353771691';
var mycontract = new web3.eth.Contract(abi, contract_addr);

console.log(mycontract.options.address);
console.log(mycontract.options.jsonInterface);
//console.log(mycontract.options.from);
//console.log(mycontract.options.gasPrice);
//console.log(mycontract.options.gas);

// Account address and balance
console.log('Account Address:', addr);
// Use Wb3 to get the balance of the address, convert it and then show it in the console.


web3.eth.getBalance(addr, function (error, result) {
	if (!error)
		console.log('Account Ether:', web3.utils.fromWei(result,'ether')); // Show the ether balance after converting it from Wei
	else
		console.log('ERROR:', error); // Should dump errors here
});

// Wallet contract address and balance
console.log('Wallet Address:', contract_addr);
web3.eth.getBalance(contract_addr, function (error, result) {
	if (!error)
		console.log('Wallet Ether:', web3.utils.fromWei(result,'ether')); // Show the ether balance after converting it from Wei
	else
		console.log('ERROR:', error); // Should dump errors here
});
