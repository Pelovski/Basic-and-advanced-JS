// You will be given some products that you should be able to add to your cart. Each product will have a name, picture, and price.
// When the "Add" button is clicked, append the current product to the textarea in the following format: 
//"Added {name} for {money} to the cart.\n". The price must be fixed to the second digit.
// When the button "Checkout" is clicked, 
//calculate the total money that you need to pay for the products that are currently in your cart. 
//Append the result to the textarea in the following format: 
// "You bought {list} for {totalPrice}."
// The list should contain only the unique products, separated by ", ". 
//The total price should be rounded to the second decimal point.
// Also, after clicking over "Checkout" and every from above is done you should disable all buttons. 
//(You can't add products or checkout again if once the checkout button is clicked).



function solve() {
   let addElements = document.querySelectorAll('.product-add button');
   let textAreaElement = document.querySelector('textarea');
   let checkoutElement = document.querySelector('.checkout');
   let totalPrice = 0;
   let productsList = new Set();

   addElements.forEach(button => {
      button.addEventListener('click', () =>{
         let product = button.parentElement.parentElement;
         let productName = product.querySelector('.product-title').textContent;
         let productPrice = product.querySelector('.product-line-price').textContent;

         totalPrice += Number(productPrice);
         productsList.add(productName);

         textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;

         console.log(productsList);
      });
   });


   checkoutElement.addEventListener('click', () => {
      productsListLikeString = Array.from(productsList).join(', ');
      textAreaElement.textContent += `You bought ${productsListLikeString} for ${totalPrice.toFixed(2)}.`
   });
}