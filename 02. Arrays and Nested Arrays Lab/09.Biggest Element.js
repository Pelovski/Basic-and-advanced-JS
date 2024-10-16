// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.

function biggestElement(input){
    let biggestNumber = -Infinity;

    for (const row of input) {
        for (const num of row) {
            if(num > biggestNumber){
                biggestNumber = num;
            }
        }
    }
    
    return biggestNumber;
}

const output = biggestElement([
    [20, 50, 10],
    [8, 33, 145]
])

console.log(output);



