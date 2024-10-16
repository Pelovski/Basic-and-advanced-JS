// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
//The input comes as an array of strings. Each element holds a command. 

function AddAndRemoveElemets(input){
    
    let output = [];
    let count = 0;

    for (const element of input) {

        count++;

        if(element == 'add'){
            output.push(count);
        }else{
            output.pop();
        }
    }

    return output.length == 0 ? 'Empty' : output;
}

const output = AddAndRemoveElemets(['remove', 
    'remove', 
    'remove']
    );

console.log(output);
    