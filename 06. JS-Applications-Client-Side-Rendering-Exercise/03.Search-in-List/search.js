import { towns } from "./towns.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

function search() {
   const rootElement = document.getElementById('towns');

   const result = (data) => html
   `
      <ul>
      ${data.map(town => html`<li>${town}</li>`)}
      </ul>
   `;

   render(result(towns), rootElement);
   
   document.querySelector('button').addEventListener('click', searchTowns);
   
}

function searchTowns(e){
   e.preventDefault();
   const serachText = document.getElementById('searchText');
   const elements = [...document.querySelectorAll('#towns li')];
   const matchedElemets = elements.filter(el => el.textContent.trim().toLowerCase().includes(serachText.value.toLowerCase()));

   elements.forEach(el => {el.classList.remove('active')});
   matchedElemets.forEach(el => {el.classList.add('active')});
   serachText.value = '';
}

search();
