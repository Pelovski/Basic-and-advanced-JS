//Write a function that takes two positive numbers as input and compute the greatest common divisor.

function greatestCommonDivisor(firstNumber, secondNumber){

    while(secondNumber){
        let temp = secondNumber;

        secondNumber = firstNumber %secondNumber;
        firstNumber = temp;
    }

    return firstNumber;
}

console.log(greatestCommonDivisor(2154, 458));
 