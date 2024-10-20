// Write a program that assembles a car by giving requirements out of existing components. 
//The client will place an order in the form of an object describing the car.
// You need to determine which parts to use to fulfill the client’s order. You have the following parts in storage:
// An engine has power (given in horsepower) and currentVolume (given in cubic centimeters). Both of these values are numbers. 
//When selecting an engine, pick the smallest possible that still meets the requirements.
// Small engine: { power: 90, currentVolume: 1800 }
// Normal engine: { power: 120, currentVolume: 2400 }
// Monster engine: { power: 200, currentVolume: 3500 }
// A carriage has a type and color. Both of these values are strings. 
//You have two types of carriages in storage and can paint them any color.
// Hatchback: { type: 'hatchback', color: <as required> }
// Coupe: { type: 'coupe', color: <as required> }
// The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. 
//The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 

function carFactory(car){

    let currentVolume = 0;
    let wheelsize = car.wheelsize % 2 == 0 ? car.wheelsize -1: car.wheelsize;

    if(car.power <= 90) currentVolume = 1800;
    else if(car.power > 90 && car.power <= 120) currentVolume = 2400;
    else if (car.power > 120) currentVolume = 3500;

    let currentCar = {
        model: car.model,
        engine: {
            power: car.power,
            volume: currentVolume,
        },
        carriage:{
            type: car.carriage,
            color: car.color,
        },
        wheels: Array(4).fill(wheelsize),
    };

    return currentCar;
}

const output = carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
  );

  console.log(output);
  
