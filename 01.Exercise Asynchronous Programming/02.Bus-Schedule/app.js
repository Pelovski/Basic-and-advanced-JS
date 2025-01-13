function solve() {

    var next = 'depot';
    var name = 'Depot';
    let infoElement = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    
  
    
    function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${next}`;
         fetch(url)
        .then(res => res.json())
        .then(data => {
            next = data.next;
            name = data.name;

        infoElement.textContent = `Next Stop ${name}`;
        departBtn.setAttribute('disabled', true);
        arriveBtn.removeAttribute('disabled'); 

        });  
    }

    function arrive() {
        departBtn.removeAttribute('disabled');
        arriveBtn.setAttribute('disabled', true);
        infoElement.textContent = `Arriving at ${name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();