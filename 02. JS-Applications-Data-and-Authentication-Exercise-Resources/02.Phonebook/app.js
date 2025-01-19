function attachEvents() {
    let btnLoadElement = document.getElementById('btnLoad');
    let btnCreateElement = document.getElementById('btnCreate');
    let url = 'http://localhost:3030/jsonstore/phonebook';

    btnLoadElement.addEventListener('click', () => LoadElements(url));

    btnCreateElement.addEventListener('click', () =>{
        let personElement = document.getElementById('person');
        let phoneElement = document.getElementById('phone');

        let phoneContact = {person: personElement.value, phone: phoneElement.value}

        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(phoneContact)
        });
        personElement.value = '';
        phoneElement.value = '';

        LoadElements(url);
    });

}

function LoadElements(url){
    let phonebookElement = document.getElementById('phonebook');

        fetch(url)
        .then(res => res.json())
        .then(data => {
            phonebookElement.innerHTML = '';
            for (const key in data) {
                let liEmelent = document.createElement('li');
                let deleteBtn = document.createElement('button');
                
                deleteBtn.textContent = 'Delete';
                liEmelent.textContent = `${data[key].person}: ${data[key].phone}`;
                liEmelent.appendChild(deleteBtn);
                phonebookElement.appendChild(liEmelent);

                deleteBtn.addEventListener('click', (e) => {
                    let deleteUrl = `http://localhost:3030/jsonstore/phonebook/${key}`;

                   fetch(deleteUrl, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                   });

                   phonebookElement.removeChild(e.currentTarget.parentElement);
                });
            }
        });
}

attachEvents();