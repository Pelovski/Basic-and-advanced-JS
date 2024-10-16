
// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter


function printArray(input, delimiter){
    return input.join(delimiter);
}

const output = printArray(['How about no?', 
    'I',
    'will', 
    'not', 
    'do', 
    'it!'], 
    '_'
    )

    console.log(output);
    