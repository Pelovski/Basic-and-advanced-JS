// Write a JS function that calculates the date of the previous day by given year, month, and day.

function calculatepreviousDay(year, month, day){
    
    let previousDay = day - 1;

    if(previousDay == 0){

        month -=1;

        if(month == 0){
            year -= 1;
            month = 12;
        }

        day = new Date(year, month, 0).getDate();
    }else{
        day -=1
    }

     return `${year}-${month}-${day}`
}

 console.log(calculatepreviousDay(2016, 10, 1));
