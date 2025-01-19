function attachEvents() {
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    let url = 'http://localhost:3030/jsonstore/messenger';

    sendBtn.addEventListener('click', ()=>{
        let nameElement = document.querySelector('input[name="author"]');
        let messageElement = document.querySelector('input[name="content"]');

        let message = {author: nameElement.value, content: messageElement.value };
        
       fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
       });

       nameElement.value = '';
       messageElement.value = '';
    });

    refreshBtn.addEventListener('click', () => {
        let messageElement = document.getElementById('messages');

        fetch(url)
        .then(res => res.json())
        .then(data => {
           
            for (const key in data) {
                messageElement.textContent = messageElement.textContent.trim();

                if (messageElement.textContent) {
                    messageElement.textContent += '\n';
                }
                messageElement.textContent += `${data[key].author}: ${data[key].content}`;
            }
        });
    });


}

attachEvents();