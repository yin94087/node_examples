var fs=require("fs");
var buf = new Buffer(1024);

function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);

console.info("consolt.time and timerEnd");

var counter = 10;
console.log("Counter: %d", counter);
console.log("");
console.time("read, write and display a file");
console.log("----------------------");

fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      } else {
			// Close the opened file.  
			fs.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("File closed successfully.");
         });
			
	  }

   });
});
// 

console.timeEnd("read, write and display a file");

console.info("Program Ended")