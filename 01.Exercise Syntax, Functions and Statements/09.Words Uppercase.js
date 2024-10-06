// Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".

// The input comes as a single string argument - the text to extract and convert words from.

// The output should be a single line containing the converted string.

function wordsUppercase(input){
    let words = input.split(/[\W_]+/).filter(Boolean);
    let output = words.join(', ');
     return output;   
}

console.log(wordsUppercase('Hi, how are you?'));