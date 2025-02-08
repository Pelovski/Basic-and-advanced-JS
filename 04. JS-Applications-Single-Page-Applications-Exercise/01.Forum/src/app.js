const createUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const topicNameElement = document.getElementById('topicName');
const usernameElement = document.getElementById('username');
const postElement = document.getElementById('postText');
const postBtnElement = document.querySelector('.public');
const cancelBtnElement = document.querySelector('.cancel');

render();





postBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(topicNameElement.value, usernameElement.value, postElement.value);

    fetch(createUrl,{
        method: 'POST',
        headers: 'application/json',
        body: JSON.stringify(),
    })

    clearValues(topicNameElement, usernameElement, postElement);
});


cancelBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
    
    clearValues(topicNameElement, usernameElement, postElement);


});


async function render(){
    let collections = await fetch('http://localhost:3030/jsonstore/collections/myboard');
    let data = await collections.json();
    let topicElement = document.querySelector('.topic-container');

    for (let i = 0; i < 2; i++) {
        topicElement.innerHTML += `<div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>Angular 10</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                    <div class="nick-name">
                        <p>Username: <span>David</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
}

function clearValues(firstElement, secoundElement, thirdElement){
    firstElement.value = '';
    secoundElement.value = '';
    thirdElement.value = '';
}
