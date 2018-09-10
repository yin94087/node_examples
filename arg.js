
var argArray=[];
var i =0;
process.argv.forEach(function (val, index, array) {
	console.log(index + ': ' + val);
	argArray[i]=index + ':' + val;
	i++;
});
var j = JSON.stringify(argArray);
console.log(argArray);
console.log(argArray[1]);

// j is a string
console.log(j);
//first character
console.log(j[0]);
console.log(j[1]);
console.log(j[2]);



