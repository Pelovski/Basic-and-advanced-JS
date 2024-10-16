// Write a JS function that rotates an array. The array should be rotated to the right side, 
//meaning that the last element should become the first, upon rotation. 
// The input comes as two parameters – an array of strings and a number. 
//The second parameter is the amount of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.


function rotateArr(input, number){

    for (let index = 0; index < number; index++) {
        let lastElement = input.pop();
       input.unshift(lastElement);
    }

    return input;
}

const output = rotateArr(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15
    );

console.log(output);
