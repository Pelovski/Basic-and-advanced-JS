// Write a JS function that when called, returns the next Fibonacci number, 
// starting at 0, 1. Use a closure to keep the current number.
// Input
// There will be no input.
// Output
// The output must be a Fibonacci number and must be returned from the function.

function getFibonator(){

   let a = 0;
   let b = 1;

    return () => {
        let nextNumber = a + b;
        a = b;
        b = nextNumber;
        return a;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
