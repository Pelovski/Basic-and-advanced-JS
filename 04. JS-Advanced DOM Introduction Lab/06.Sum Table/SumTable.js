// Write a JS function that finds the first table in a document and sums the values in the last column.
// The result is then displayed in an element with ID "sum".
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.



function sumTable() {
    let elemnts = document.querySelectorAll('td:not(#sum):nth-child(even)');
    let sum  =  document.getElementById('sum');
    let result = 0;

    elemnts.forEach(el => { result += Number(el.textContent); })

    sum.textContent = result;
    
}