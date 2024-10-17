// // You have been tasked to create a registry for different towns and their population.
// The input comes as array of strings. Each element will contain data for a town and its population in the following format:
// "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.

function townPopulation(input){

    let output = {};
    let currentTownName = '';
    let population = 0;

    for (const element of input) {
        let splitedElements = element.split('<->');

        currentTownName = splitedElements[0];
        population = Number(splitedElements[1]);

        if(output.hasOwnProperty(currentTownName)){
            output[currentTownName] += population;
        }else{
            output[currentTownName] = population;
        }
    }

    Object.entries(output).forEach(([town, population]) => console.log(`${town} : ${population}`));
}

const result = townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1200000']
    );

    
