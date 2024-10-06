// Write a program that receives 6 parameters which are a number and a list of five operations.
//Perform the operations sequentially by starting with the input number and using the result of every operation
// as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:

// chop - divide the number by two

// dice - square root of a number

// spice - add 1 to the number

// bake - multiply number by 3

// fillet - subtract 20% from the number

// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. 
//The remaining 5 elements are the names of the operations to be performed.


function cookingByNumbers(number, ...input){
    
    var currentNumber = parseInt(number);

   for (let index = 0; index < input.length; index++) {
    currentNumber = cookingOperation(currentNumber, input[index]);

    console.log(currentNumber);
   }
    
}


function cookingOperation(number, operation){

    switch (operation) {
        case 'chop': number /= 2; break;
        case 'dice': number = Math.sqrt(number); break;
        case 'spice': number++; break;
        case 'bake': number *= 3; break;
        case 'fillet': number -= number * 0.20; break;
        default:
            break;
    }

    return number;
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');