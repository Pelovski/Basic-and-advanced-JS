// Write a program that keeps a string inside its context and can execute different commands 
// that modify or print the string on the console.
// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console
// Input
// Check the examples below to see how your code will be executed.
// Output
// Whenever you receive the command print, the output should be printed on the console.

function solution(){
    let output = '';
    return {
        append: (str) => { output += str },
        removeStart: (count) => { output = output.slice(count) },
        removeEnd: (count) => { output = output.slice(0, -count) },
        print: () => { console.log(output); }
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
