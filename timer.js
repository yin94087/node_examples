function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);
console.log ("before clear timeout");
console.log(t);

// Now clear the timer
clearTimeout(t);

console.log ("after clear timeout");
console.log(t);