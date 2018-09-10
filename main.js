var fs = require("fs");

//var data = fs.readFileSync('input.txt');  // synchronous read
//console.log(data.toString());

fs.readFile('input.txt', function (err, data) {    // asynchronous read
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("");
console.log("Going to get file info!");

fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});

console.log("Going to write into existing file");
// {encoding, mode, flag}. By default. encoding is utf8, mode is octal value 0666. and flag is 'w'
fs.writeFile('output.txt', 'Simply Easy Learning! Asynchronous writing',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('output.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

console.log("Program Ended");

