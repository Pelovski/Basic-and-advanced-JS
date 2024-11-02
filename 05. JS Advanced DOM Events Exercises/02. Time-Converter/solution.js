// Create a program that converts different time units.
// Your task is to add a click event listener to all [CONVERT] buttons. 
// When a button is clicked, read the corresponding input field, 
// convert the value to the three other time units and display it in the input fields.

function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    const timeUnits = {
        days: 1,
        hours: 24,
        minutes: 1440, // 24 * 60
        seconds: 86400 // 24 * 60 * 60
    };

    function convert(value, unit) {
        let days = value / timeUnits[unit];
        daysElement.value = days;
        hoursElement.value = days * timeUnits.hours;
        minutesElement.value = days * timeUnits.minutes;
        secondsElement.value = days * timeUnits.seconds;
    }

    document.getElementById('daysBtn').addEventListener('click', () => convert(daysElement.value, 'days'));
    document.getElementById('hoursBtn').addEventListener('click', () => convert(hoursElement.value, 'hours'));
    document.getElementById('minutesBtn').addEventListener('click', () => convert(minutesElement.value, 'minutes'));
    document.getElementById('secondsBtn').addEventListener('click', () => convert(secondsElement.value, 'seconds'));
}
