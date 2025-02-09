import { cats } from './catSeeder.js';
import {html, render } from '../node_modules/lit-html/lit-html.js';

const result = (data) => html`
    <ul>
    ${data.map(cat => 
    html`<li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click="${showStatus}">Show status code</button>
                 <div class="status" style="display: none" id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
             </div>
    </li>`
    )}
    </ul>
`;

const root = document.getElementById('allCats');

render(result(cats), root);

function showStatus(e){
    const showBtn = e.target.parentNode.querySelector('.showBtn');
    var isShowed = e.target.parentNode.querySelector('.status');  
    var isVisible = isShowed.style.display === 'inline';
    
    isShowed.style.display = isVisible ? 'none' : 'inline';
    showBtn.textContent = isVisible ? 'Show status code' : 'Hide status code';
}   
