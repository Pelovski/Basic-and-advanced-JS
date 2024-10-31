// --Extend the previous problem to display a [Delete] link after each list item.
// Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.

function addItem() {
        let ulElement = document.getElementById('items');
        let inputElement = document.getElementById('newItemText');
        let liElement = document.createElement('li');
        let aElement = document.createElement('a');

        aElement.textContent = '[Delete]';
        liElement.textContent = inputElement.value;
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);

        aElement.addEventListener('click', () =>{
            liElement.remove();
        });
        
    inputElement.value = '';

}