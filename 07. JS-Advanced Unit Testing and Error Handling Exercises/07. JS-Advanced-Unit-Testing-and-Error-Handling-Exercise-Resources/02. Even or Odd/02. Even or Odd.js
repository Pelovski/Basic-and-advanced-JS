// You need to write unit tests for a function isOddOrEven() that checks whether the length of a passed string is even or odd.
// If the passed parameter is NOT a string return undefined. 
//If the parameter is a string return either "even" or "odd" based on the length of the string.

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


export default isOddOrEven;
