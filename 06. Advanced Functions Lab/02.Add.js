// Write a program that keeps a number inside its context and returns a new function that adds a given number to the previous one.
// Input
// Check the examples below to see how your code will be executed.
// Output
// Your function should return the final result.

function solution(number){
    return function(currentNumber) {
        return number += currentNumber;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

