//Write a function that finds the elements at even positions in an array.

function findEvenPosition(input){
    
    let position = 0;
    let output = [];

    for (let index = 0; index < input.length; index+=2) {
        
        output[position] = input[index];
        position++;
    }

    return output;
}

console.log(findEvenPosition(['5', '10']));