// You are given two integers n and k. Write a JS function that generates and return the following sequence:

// The first element is 1

// Every following element equals the sum of the previous k elements

// The length of the sequence is n elements

// The input comes as two number arguments. The first element represents the number n, and the second – the number k.

// The output is the return value of your function and should be an array of numbers.

function lastNumbers(n,k){

    let output = [n];
    let counter  = k;
    output[0] = 1;

    for (let index = 1; index < n; index++) {

        output[index] = 0;

        if(index >= k){

            for (let j = index - k; j < counter; j++) {
               
                output[index] += output[j]; 
            }

            counter++;
            
        }else{
            for (let g = 0; g < index; g++) {
               
                output[index] += output[g];
            }
        }
    }

    return output;
}

console.log(lastNumbers(8,2));