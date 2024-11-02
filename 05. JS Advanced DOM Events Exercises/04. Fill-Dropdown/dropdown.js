function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');
    let selectElement = document.getElementById('menu');
    let optionElement = document.createElement('option');    

    optionElement.value = newItemValueElement.value;
    optionElement.text = newItemTextElement.value;

    newItemTextElement.value = '';
    newItemValueElement.value = '';

    selectElement.appendChild(optionElement);
}