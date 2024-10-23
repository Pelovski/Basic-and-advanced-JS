// Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID. 
// The result is a string, joined by "; " (semicolon, space).
// Input
// Your function will receive a string parameter, representing the target element ID, from which text must be extracted.
// The text should be extracted from the DOM.
// Output
// Return a string with all matched text, separated by "; " (semicolon, space).



function extract(content) {
    let element = document.getElementById(content);
    const matches = element.textContent.match(/\((.*?)\)/g).map(str => str.slice(1, -1));
    const result = matches.join('; ');
    element.textContent = result;
}