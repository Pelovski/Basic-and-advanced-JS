function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let tableElements = document.querySelectorAll('tbody tr');
   let searchTextElement = document.getElementById('searchField');
   
   function onClick() {
     
      for (let i = 0; i < tableElements.length; i++) {
      
         tableElements[i].classList.remove("select");

         if(tableElements[i].textContent.toLowerCase().includes(searchTextElement.value.toLowerCase()) && searchTextElement.value != ''){
            
            tableElements[i].classList.add("select");
         }
         
      }
   }
}