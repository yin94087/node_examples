

process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });

//
var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// contract info here. abi and bytecode
var bytecode = {
	"linkReferences": {},
	"object": "608060405234801561001057600080fd5b5060008054600160a060020a033316600160a060020a03199091161790556101548061003d6000396000f3006080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a95c48b811461005b5780634fa10cfc14610087578063da8e6a61146100ae575b600080fd5b34801561006757600080fd5b506100736004356100c6565b604080519115158252519081900360200190f35b34801561009357600080fd5b5061009c6100ce565b60408051918252519081900360200190f35b3480156100ba57600080fd5b5061009c6004356100d4565b600190815590565b60015490565b6000805460408051848152905173ffffffffffffffffffffffffffffffffffffffff909216917f9f25af53eb2b3f57f4256dceb7441715adaa2734aee861417f2d7bf401e242fb9181900360200190a250905600a165627a7a72305820a2297ebac71fa72410396b99e16e52533956b69fa1ef3ddde84a8b9b2132db570029",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB CALLER AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP2 AND OR SWAP1 SSTORE PUSH2 0x154 DUP1 PUSH2 0x3D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x56 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x1A95C48B DUP2 EQ PUSH2 0x5B JUMPI DUP1 PUSH4 0x4FA10CFC EQ PUSH2 0x87 JUMPI DUP1 PUSH4 0xDA8E6A61 EQ PUSH2 0xAE JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x67 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x73 PUSH1 0x4 CALLDATALOAD PUSH2 0xC6 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x93 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x9C PUSH2 0xCE JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xBA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x9C PUSH1 0x4 CALLDATALOAD PUSH2 0xD4 JUMP JUMPDEST PUSH1 0x1 SWAP1 DUP2 SSTORE SWAP1 JUMP JUMPDEST PUSH1 0x1 SLOAD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD DUP5 DUP2 MSTORE SWAP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND SWAP2 PUSH32 0x9F25AF53EB2B3F57F4256DCEB7441715ADAA2734AEE861417F2D7BF401E242FB SWAP2 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 LOG2 POP SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 LOG2 0x29 PUSH31 0xBAC71FA72410396B99E16E52533956B69FA1EF3DDDE84A8B9B2132DB570029 ",
	"sourceMap": "25:550:0:-;;;169:55;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;198:9:0;:22;;-1:-1:-1;;;;;210:10:0;198:22;-1:-1:-1;;;;;;198:22:0;;;;;;25:550;;;;;;"
};

var abi=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_value",
				"type": "int256"
			}
		],
		"name": "readdata",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "int256"
			}
		],
		"name": "ReadData",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "int256"
			}
		],
		"name": "setdata",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getdata",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var datareaderABI = web3.eth.contract(abi);

//console.log("Deploying DataReader contract ..... ");
//var deploy = { from: web3.eth.coinbase, data: bytecode, gas: 2000000};
//var partialInstance = datareaderABI.new("", deploy);
//console.log("Deployed DataReader contract at " + partialInstance.adddress);

var datareader = datareaderABI.at("0x293d765f3d25cab749fbca4e0b760c0f8f159d15");

web3.personal.unlockAccount(web3.eth.coinbase);

// random number generator
var rn = require('random-number');
var options = {
  min:  0
, max:  100000000
, integer: true
}
//var num = rn(options) // example outputs ¡÷ -187, 636

var exampleEvent = datareader.ReadData({_from: web3.eth.coinbase});
exampleEvent.watch(function(err, result) {
	if (err) {
	    console.log(err);
	    return;
	}
	console.log("ReadData event triggering .....");
	console.log(web3._extend.utils.toDecimal(result.args._value));
	console.log("event sender: " + result.args._from);
	// check that result.
	//._from is web3.eth.coinbase then
	    // display result.args._value in the UI and call    
	    // exampleEvent.stopWatching()
	// get data here
	var num = rn(options);
	// write data back to the DataReader contract
	var ss = datareader.setdata(num, {from: web3.eth.coinbase});
	console.log("setdata: " + ss);

});

var id = 9999;   // can be used to identify what data to read
var rr = datareader.readdata(id, {from: web3.eth.coinbase});
console.log("readdata:" + rr);

var dd = datareader.getdata();
	console.log("getdata:" + dd);
	
	
var x = setInterval(function () {
    console.log('As time goes by...');
    var dd = datareader.getdata();
	console.log("getdata:" + dd);
}, 1000);














