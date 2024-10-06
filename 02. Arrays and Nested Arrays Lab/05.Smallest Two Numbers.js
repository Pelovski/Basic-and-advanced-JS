//Write a function that prints the two smallest elements from an array of numbers.

//The input comes as an array of number elements.

function twoSmallestElements(input){

   let smallestNumber = Math.min(...input);
   input = input.filter(input => input !== smallestNumber);
   let secondSmallesNumber = Math.min(...input);

   console.log(`${smallestNumber} ${secondSmallesNumber}`);    
}

twoSmallestElements([3, 0, 10, 4, 7, 3]);
