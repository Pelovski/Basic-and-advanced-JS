// You will be given some furniture as an array of objects.
// Each object will have a name, a price, and a decoration factor. 
// When the ["Generate"] button is clicked, add a new row to the table 
// for each piece of furniture with image, name, price, and decoration factor (code example below). 
// When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox
//  the names of the piece of furniture that were checked, separated by a comma and single space (", ") in the following format: 
// "Bought furniture: {furniture1}, {furniture2}…".
// On the next line, print the total price in the format: 
// "Total price: {totalPrice}" (formatted to the second decimal point). 
// Finally, print the average decoration factor in the format: "Average decoration factor: 


function solve() {
  let inputElement = document.querySelectorAll('textarea')[0];
  let generateBtn = document.querySelectorAll('button')[0];
  let tableElement = document.querySelector('.table tbody');
  let buyElement = document.querySelectorAll('textarea')[1];
  let buyBtn = document.querySelectorAll('button')[1];
  let products = 'Bought furniture: ';
  let totalPrice = 0;
  let avarageDecorationFactor = 0;
  

  generateBtn.addEventListener('click', () =>{

      let input = JSON.parse(inputElement.value)[0];
      let trElement = document.createElement('tr');
      let imageElement = document.createElement('img');
      let nameParagrapgElement = document.createElement('p');
      let priceParagrapgElement = document.createElement('p');
      let deocorationFactorParagrapgElement = document.createElement('p');
      let checkbox = document.createElement('input');
      
      const createCell = (content) => {
        const cell = document.createElement('td');
        cell.appendChild(content);
        return cell;
      };

      imageElement.src = input.img;
      nameParagrapgElement.textContent = input.name;
      priceParagrapgElement.textContent = input.price;
      deocorationFactorParagrapgElement.textContent = input.decFactor;
    
      checkbox.type = 'checkbox';

      inputElement.value = '';

      trElement.appendChild(createCell(imageElement));
      trElement.appendChild(createCell(nameParagrapgElement));
      trElement.appendChild(createCell(priceParagrapgElement));
      trElement.appendChild(createCell(deocorationFactorParagrapgElement));
      trElement.appendChild(createCell(checkbox));

      tableElement.appendChild(trElement);
  });

  buyBtn.addEventListener('click', () => {
    let checkedItems = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    .filter(checkbox => checkbox.checked);

    console.log(checkedItems);
    

    for (let i = 0; i < checkedItems.length; i++) {
      let name = checkedItems[i].parentElement.parentElement.querySelectorAll('td')[1].textContent;
      let price = Number(checkedItems[i].parentElement.parentElement.querySelectorAll('td')[2].textContent);
      let decorationFactor = Number(checkedItems[i].parentElement.parentElement.querySelectorAll('td')[3].textContent);
      

      if (checkedItems.length - 1 == i) {
        products += name;
      }else{
        products += `${name}, `;
      }

      totalPrice += price;
      avarageDecorationFactor += decorationFactor;
    }

     buyElement.textContent = `${products} \nTotal price: ${totalPrice.toFixed(2)} \nAverage decoration factor: ${avarageDecorationFactor / checkedItems.length}`;
  });

}

//[
// {"name": "Sofa",
// "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", 
// "price": 150, "decFactor": 1.2}]