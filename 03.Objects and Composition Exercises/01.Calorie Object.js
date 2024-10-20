// Write a function that composes an object by given properties. 
//The input comes as an array of strings. Every even index of the array represents the name of the food. 
//Every odd index is a number that is equal to the calories in 100 grams of the given product.
// Assign each value to its corresponding property, and finally print the object.
// The input comes as an array of string elements.
// The output should be printed on the console.

function calorieObject(input){
    let output = {};
    let currentKey = '';
   
    for (let i = 0; i < input.length; i++) {
        
        if(i % 2 == 0){
            currentKey = input[i];
            output[currentKey];
        }
        else{
            output[currentKey] = Number.parseInt(input[i]);
        }
        
    }

    return output;
}

const output = calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);

console.log(output);

