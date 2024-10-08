// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array,
// doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.

function processOddPositions(input){

    let output = [];
    let counter = 0;

    for (let index = 1; index < input.length; index += 2) {

        if(input[index] == 0){
            output[counter] = 0;
            counter++;
            continue;
        }
        output[counter] = input[index] * 2;
        counter++;
    }

    return output.reverse();
}

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));