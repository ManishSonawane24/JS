// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed immediately after it is created.
// It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts:

// It is used to preserve a private scope within your function.
// It is used to prevent polluting the global scope.

// Syntax:
// (function() {
//     // code here
// })();

(function() {
    console.log("I am an IIFE");    
})();

( () => {
    console.log("I am an IIFE with arrow function");
})(); // don't forget to put semicolon at the end of IIFE

(DB = (name) => {
    console.log(`I am ${name} database`);
})("MongoDB");