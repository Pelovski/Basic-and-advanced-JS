function search() {
   let townElements = document.querySelectorAll('#towns li');
   let searchElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');
   let matches = 0;

   for (const town of townElements) {

      town.style.textDecoration = 'none';

      if(town.textContent.toLowerCase().includes(searchElement.value.toLowerCase())){
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      }
   }
   let matchesText = matches > 1 ? `${matches} matches found` : `${matches} match found`;
   resultElement.textContent = matchesText;
   
}
