// Write a program that takes an email from an input field and deletes the matching row from a table.

// If entry is found, the textContent in the element with id="result" must be set to "Deleted."

// Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found."

// Submit only the deleteByEmail() function in Judge.

function deleteByEmail() {
    let tdElements = document.querySelectorAll('#customers td:nth-child(even)');
    let inputElement = document.querySelector('input');
    let resultElement = document.getElementById('result');
    resultElement.textContent = 'Not found.'

    for (const element of tdElements) {
        
        if(inputElement.value == element.textContent){
            element.parentElement.remove();
            resultElement.textContent = 'Deleted.'
        }
    }
    
}