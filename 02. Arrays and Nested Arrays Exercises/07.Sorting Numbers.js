// Write a function that sorts an array of numbers so that the first element is the smallest one, 
//the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.

function sortArr(input){

    let output = [];
    input.sort((a, b) => a - b);

   while(input.length > 0){

        output.push(input.shift());

        if(input.length > 0){
            output.push(input.pop());
        }
   }

    return output;
}

const output = sortArr([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

console.log(output);
