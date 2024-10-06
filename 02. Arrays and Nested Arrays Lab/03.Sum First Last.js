// Write a function that calculates and returns the sum of the first and the last elements in an array.

// The input comes as an array of string elements holding numbers.

// The output is the return value of your function and should be a number.

const sumFirstAndLastElements = input => parseInt(input[0]) + parseInt(input[input.length - 1]);

console.log(sumFirstAndLastElements(['20', '30', '40']));