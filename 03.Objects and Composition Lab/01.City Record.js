// You will receive a city’s name (string), population (number), and treasury (number) as arguments,
// which you will need to set as properties of an object and return it.

function objectConvertor(name, population, treasury){
    return { name, population, treasury};
}

const output = objectConvertor('Tortuga',
7000,
15000
);

console.log(output);
