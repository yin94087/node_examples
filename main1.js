var fs = require("fs");

//var data = fs.readFileSync('input.txt');  // synchronous read
fs.readFile('input.txt', function (err, data) {    // asynchronous read
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");