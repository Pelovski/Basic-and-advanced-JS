// You will receive an array of names.
// Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function sortedArr(input){

    input.sort();

    for (let index = 0; index < input.length; index++) {
        
        console.log(`${index + 1 }.${input[index]}`);
        
    }
}

sortedArr(["John", "Bob", "Christina", "Ema"]);