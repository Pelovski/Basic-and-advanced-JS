let userData = null;

window.addEventListener('DOMContentLoaded', () =>{
    userData = JSON.parse(sessionStorage.getItem('userdata'));
    let userEmailElement = document.querySelector('.email span');
    let logoutElement = document.getElementById('logout');
    

    if(userData != null){
        document.getElementById('guest').style.display = 'none';
        userEmailElement.textContent = userData.email;
        addBtnElement = document.querySelector('#addForm .add').disabled = false;
        logoutElement.addEventListener('click', () => {
            sessionStorage.clear();
            window.location = '/05.Fisher-Game/';
        });



    }else{
        document.getElementById('user').style.display = 'none';
    }

    document.querySelector('.load').addEventListener('click', loadData);

    document.getElementById('addForm').addEventListener('submit', onCreateSubmit);
});

async function onCreateSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {});

    console.log(...formData.entries());
    
    
}

async function loadData (){
    const res = await fetch('http://localhost:3030/data/catches');
    const data = await res.json();

    document.getElementById('catches').replaceChildren(...data.map(createPreview));
}

 function createPreview(item) {
    const isOwner = (userData && item._ownerId == userData.id);
  

    let element = document.createElement('div');
    element.className = 'catch';
    element.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${item.angler}" ${!isOwner ? 'disabled' : ''}>
    <label>Weight</label>
    <input type="text" class="weight" value="${item.weight}" ${!isOwner ? 'disabled' : ''}>
    <label>Species</label>
    <input type="text" class="species" value="${item.species}" ${!isOwner ? 'disabled' : ''}>
    <label>Location</label>
    <input type="text" class="location" value="${item.location}" ${!isOwner ? 'disabled' : ''}>
    <label>Bait</label>
    <input type="text" class="bait" value="${item.bait}" ${!isOwner ? 'disabled' : ''}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? 'disabled' : ''}>
    <button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
    <button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>
`;

return element;
}