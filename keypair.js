var crypto = require('crypto');

var prime_length = 256;
var diffHell = crypto.createDiffieHellman(prime_length);

diffHell.generateKeys('base64');
console.log("Public Key : " ,diffHell.getPublicKey('base64'));
console.log("Private Key : " ,diffHell.getPrivateKey('base64'));

console.log("Public Key : " ,diffHell.getPublicKey('hex'));
console.log("Private Key : " ,diffHell.getPrivateKey('hex'));


//  
console.log(" ======= Ethereum Address ana private key ==========");

var EC = require('elliptic').ec;
var BN = require('bn.js');
var ec = new EC('secp256k1');
const keccak256 = require('js-sha3').keccak256;


var privateKey=Buffer.alloc(32, 0);
privateKey[31]=1;

console.log("PK::"+privateKey.toString('hex'))

var G = ec.g; // Generator point
var pk = new BN('1'); // private key as big number

var pubPoint=G.mul(pk); // EC multiplication to determine public point

var x = pubPoint.getX().toBuffer(); //32 bit x co-ordinate of public point
var y = pubPoint.getY().toBuffer(); //32 bit y co-ordinate of public point 

var publicKey =Buffer.concat([x,y])

console.log("public key::"+publicKey.toString('hex'))

const address = keccak256(publicKey) // keccak256 hash of  publicKey

const buf2 = Buffer.from(address, 'hex');
console.log("Ethereum Adress:::"+"0x"+buf2.slice(-20).toString('hex')) // take lat 20 bytes as ethereum adress
