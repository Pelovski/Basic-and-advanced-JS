// Write a function that calculates how long it takes a student to get to university.
//The function takes three numbers:

//** The first is the number of steps the student takes from their home to the university
//** Тhe second number is the length of the student's footprint in meters
//** Тhe third number is the student speed in km/h
//** Every 500 meters the student rests and takes a 1-minute break.

function timeToWalk(steps, footprintLength, speed){
    let distance = steps * footprintLength;
    let minutesAndSecondsNeeded = (distance / (speed * 1000)) * 60
    let onlyMinutes = Math.floor( minutesAndSecondsNeeded);
    let onlySeconds = (minutesAndSecondsNeeded - onlyMinutes) * 60;
    let restMinutes = Math.floor(distance / 500)
    let hours = 0;

    if(onlySeconds >= 60){
        onlySeconds -=60;
        onlyMinutes +=1;
    }

   while(onlyMinutes >= 60){
    onlyMinutes -= 60;
    hours++;
   }

    console.log(`${formatTime(hours)}:${formatTime(onlyMinutes)}:${formatTime(onlySeconds.toFixed(0))}`);
    
}

function formatTime(num) {
    return String(num).padStart(2, '0'); // Добавя 0 отпред, ако числото е по-малко от 10
}

timeToWalk(4000, 0.60, 1)