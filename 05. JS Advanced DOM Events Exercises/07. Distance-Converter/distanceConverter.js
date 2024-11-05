// Your task is to convert from one distance unit to another by adding a click event listener to a button.
// When it is clicked, read the value from the input field and get the selected option from the input and output units dropdowns. 
// Then calculate and display the converted value in the disabled output field.
// Example
 
// Hints
// •	Multiply the incoming distance by the following conversion rates to convert to meter
// •	Divide to convert from meters to the required output unit
// •	To see which option is selected, read the properties of its parent: 
// value gives you the value of the selected option (as displayed in the HTML), 
// selectedIndex gives you the 0-based index of the selected option. 
// For example, if miles are selected, inputUnits.value is "mi", inputUnits.selectedIndex is 4. Option text is irrelevant
// •	Use the following table information to do that:



function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convertDistance);
}

function convertDistance(){
    const inputDistance = parseFloat(document.getElementById('inputDistance').value);
    const inputUnit = document.getElementById('inputUnits').value;
    const outputUnit = document.getElementById('outputUnits').value;

    if (isNaN(inputDistance)) {
        alert("Please enter a valid number for the distance.");
        return;
    }

    // Conversion rates to meters for each unit
    const toMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };  
    
    const distanceInMeters = inputDistance * toMeters[inputUnit];

    console.log(toMeters[outputUnit]);
    
    const convertedDistance = distanceInMeters / toMeters[outputUnit];

    document.getElementById('outputDistance').value = convertedDistance.toFixed(2);
}