// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:

// On the motorway, the limit is 130 km/h

// On the interstate, the limit is 90 km/h

// In the city, the limit is 50 km/h

// Within a residential area, the limit is 20 km/h

// If the driver is within the limits, there should be a printed speedand the speed limit.

function roadRadar(speed, area){

    let allowedSpeed = 0;
    let status = '';

    switch (area) {
        case 'motorway': allowedSpeed = 130; break;
        case 'interstate': allowedSpeed = 90; break;
        case 'city': allowedSpeed = 50; break;
        case 'residential': allowedSpeed = 20; break;
        default:
            break;
    }

    if(speed > allowedSpeed){

        let diff = speed - allowedSpeed;

        if(diff <= 20){
            status = 'speeding'
        }else if(diff <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }

       return `The speed is ${diff} km/h faster than the allowed speed of ${allowedSpeed} ${status}`;
    }

    return `Driving ${speed} km/h in a ${allowedSpeed} zone`;
}


console.log(roadRadar(200, 'motorway'));

