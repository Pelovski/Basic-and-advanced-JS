// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.

function sameNumbers(number){
    let output = true;
    let lastNumber = number % 10;
    while(number != 0){
        let currentLastNumber = number % 10;

        if(currentLastNumber != lastNumber){
            output = false;
            break;
        }

       number = Math.floor(number / 10);
    }

    return output;
}

console.log(sameNumbers(111212));
