// Write a function that checks if a given matrix of numbers is magical. A matrix is magical 
//if the sums of the cells of every row and every column are equal. 
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

function magicMatrices(input){
    let sum = input[0].reduce((acc, val) => acc + val, 0);
    let currentRowSum = 0;
    let currentColSum = 0;

    for (let row = 0; row < input.length; row++) {

        currentRowSum = input[row].reduce((acc, val) => acc + val, 0);

        for (let col = 0; col < input[row].length; col++) {
            currentColSum += input[col][row];
        }

        if(sum != currentRowSum || sum != currentColSum){
            return false;
        }

        currentColSum = 0;
    }

    return true;
}

const output = magicMatrices([
    [3, 5, 7],
    [5, 7, 3],
    [7, 3, 5]
]);

console.log(output);

