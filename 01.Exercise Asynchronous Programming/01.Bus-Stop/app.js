function getInfo() {
    let busId = document.querySelector('#stopInfo input').value;
    let stopNameElement = document.getElementById('stopName');
    let busesElement = document.getElementById('buses');

    stopNameElement.textContent = '';
    busesElement.textContent = '';

    let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    fetch(url)
    .then(responce => responce.json())
    .then(data => {
        stopNameElement.textContent = data.name;

      for (const key in data.buses) {
        let liElement = document.createElement('li');
        liElement.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
        busesElement.appendChild(liElement);
      }
    })
    .catch(err => {
        stopNameElement.textContent = 'Error';
    });

}