import { html, render } from '../node_modules/lit-html/lit-html.js';

let result = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`;

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);


function getTowns(event){
 event.preventDefault();

 const rootElement = document.getElementById('root');
 const towns = document.getElementById('towns').value
 .split(', ')
 .filter(town => town.trim() !== '');

 if(towns.length != 0){
    render(result(towns), rootElement);
 }
}