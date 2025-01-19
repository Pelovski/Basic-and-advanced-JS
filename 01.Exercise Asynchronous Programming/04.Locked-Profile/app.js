function lockedProfile() {
   let templateCard = document.querySelector('.profile');

   let url = `http://localhost:3030/jsonstore/advanced/profiles`;

   fetch(url)
   .then(res => res.json())
   .then(data => {

    for (const key in data) {
        let username = data[key].username;
        let email = data[key].email;
        let age = data[key].age;

        let newCard = templateCard.cloneNode(true);

        newCard.querySelector('input[name="user1Username"]').value = username;
        newCard.querySelector('input[name="user1Email"]').value = email;
        newCard.querySelector('input[name="user1Age"]').value = age;
        document.body.appendChild(newCard);
    }
    
   })
}