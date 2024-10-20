// Write a program that receives a worker object as a parameter and modifies its properties. Workers have the following structure:
// {
//   weight: Number,
//   experience: Number,
//   levelOfHydrated: Number,
//   dizziness: Boolean 
// }
// Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. 
// If you receive a worker whose dizziness property is set to true it means he needs to intake some water to be able to work correctly. 
// The required amount is 0.1ml per kilogram per year of experience. 
// The required amount must be added to the existing amount (to the levelOfHydrated).
// Once the water is administered, change the dizziness property to false.
// Workers who do not have dizziness should not be modified in any way. Return them as they were.

function crewConstruction(workers){
 
    if(workers.dizziness == true){
        workers.levelOfHydrated += (workers.weight * 0.1) * workers.experience;
        workers.dizziness = false;
    }

    return workers;
}

const result = crewConstruction({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }  
  );

  console.log(result);
  