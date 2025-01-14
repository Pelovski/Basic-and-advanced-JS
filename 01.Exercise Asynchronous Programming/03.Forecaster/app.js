function attachEvents() {
    let wetherUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    let locationEmelent = document.getElementById('location');
    let submitBtn = document.getElementById('submit');
    let forcastElement = document.getElementById('forecast');
    let currentForecastElement = document.querySelector('#current');
    let upcomingForeCastElement = document.querySelector('#upcoming');

    let wetherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',
    };


    submitBtn.addEventListener('click', () =>{
    fetch(wetherUrl)
    .then(res => res.json())
    .then(data => {

        let result = data.filter(x => x.name.toLowerCase() === locationEmelent.value.toLowerCase());
        let code = result[0].code;
        forcastElement.style.display = 'block';


        let werherTodayUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        fetch(werherTodayUrl)
        .then(responce => responce.json())
        .then(wether => {

            let existingForecast = document.querySelector('.forecast');
            
            if (existingForecast) {
                existingForecast.remove();
            }

            let divForcast = document.createElement('div');
            let spanConditionSymbol = document.createElement('span');
            let spanCondition = document.createElement('span');
            let spanLocation = document.createElement('span');
            let spanTemperatur = document.createElement('span');
            let spanConditionData = document.createElement('span');


            divForcast.classList.add('forecast');
            spanConditionSymbol.classList.add('condition', 'symbol');
            spanCondition.classList.add('condition');
            spanLocation.classList.add('forecast-data');
            spanTemperatur.classList.add('forecast-data');
            spanConditionData.classList.add('forecast-data');
            spanConditionSymbol.innerHTML = wetherSymbols[wether['forecast'].condition];

            spanLocation.textContent = wether['name'];
            spanTemperatur.innerHTML = `${wether['forecast'].high}&#176/${wether['forecast'].low}&#176`;
            spanConditionData.textContent = wether['forecast'].condition;

            spanCondition.appendChild(spanLocation);
            spanCondition.appendChild(spanTemperatur);
            spanCondition.appendChild(spanConditionData);
            
            divForcast.appendChild(spanConditionSymbol);
            divForcast.appendChild(spanCondition);
            currentForecastElement.appendChild(divForcast);
        })
        .catch(err => {
            forcastElement.style.display = 'block';
            currentForecastElement.innerHTML = '<div class="error">Error</div>';
        });

        let threeDaysForecastUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        fetch(threeDaysForecastUrl)
        .then(respo => respo.json())
        .then(forecast => {

            let existingForecastInfo = document.querySelector('.forecast-Info');
            
            if (existingForecastInfo) {
                existingForecastInfo.remove();
            }

            let forecastInfo = document.createElement('div');

            forecastInfo.classList.add('forecast-Info');

            
            for (const key in forecast['forecast']) {

                let spanSymbol = document.createElement('span');
                let spanDegrees = document.createElement('span');
                let spanWetherCondition = document.createElement('span');
                let spanUpcoming = document.createElement('span');

                spanUpcoming.classList.add('upcoming');
                spanSymbol.classList.add('symbol');
                spanDegrees.classList.add('forecast-data');
                spanWetherCondition.classList.add('forecast-data');

                const dayForecast = forecast['forecast'][key];

                spanSymbol.innerHTML = wetherSymbols[dayForecast['condition']];
                spanDegrees.innerHTML = `${dayForecast['high']}&#176/${dayForecast['low']}&#176`;
                spanWetherCondition.textContent = dayForecast['condition'];

                spanUpcoming.appendChild(spanSymbol);
                spanUpcoming.appendChild(spanDegrees);
                spanUpcoming.appendChild(spanWetherCondition);

                forecastInfo.appendChild(spanUpcoming);
                upcomingForeCastElement.appendChild(forecastInfo);
            }
           
            
        })
        
    }).catch(err => {
        forcastElement.style.display = 'block';
        forcastElement.textContent = 'Error';
    });
    });

}

attachEvents();