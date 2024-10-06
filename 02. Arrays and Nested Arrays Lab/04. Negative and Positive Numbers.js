// Write a JS function that processes the elements in an array one by one and produces a new array. 
//If the current element is a negative number you must add it to the front of the array (as the first element of the array).
// Otherwise, if the current element is a positive number (or 0),
// you must add it to the end of the array (as the last element of the array).
// The input comes as an array of number elements.

function negativeAndPositiveNumbersInArr(input){
    let output = [];

    for (let index = 0; index < input.length; index++) {
      
        if(input[index] < 0){
            output.unshift(input[index]);
        }else{
            output.push(input[index]);
        }
    }

    return output;
}

console.log(negativeAndPositiveNumbersInArr([3, -2, 0, -1]));
