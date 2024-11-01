// You will receive an array of strings. For each string, create a div with a paragraph with the string in it. 
// Each paragraph is initially hidden (display:none). 
// Add a click event listener to each div that displays the hidden paragraph. 
// Finally, you should append all divs to the element with an id "content".

function create(words) {
   
   let contentElement = document.getElementById('content');

   for (const word of words) {
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');

      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none'
      divElement.appendChild(paragraphElement);
      contentElement.appendChild(divElement);

      divElement.addEventListener('click', () =>{
         paragraphElement.style.display = 'inline';
      });
   }
}