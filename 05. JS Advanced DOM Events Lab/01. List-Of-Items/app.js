//Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.

function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let ulItemElement = document.getElementById('items');

    let listItem = document.createElement('li');

    listItem.textContent = inputTextElement.value;

    ulItemElement.appendChild(listItem);
    inputTextElement.value = '';   
}