// This task is an extension of Problem 1, you may use your solution from that task as a base.
// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it. In addition to the input parameters, the object must have a property taxRate with an initial value of 10, and three methods for managing the city:
// •	collectTaxes() - Increase treasury by  population * taxRate
// •	applyGrowth(percentage) - Increase population by given percentage
// •	applyRecession(percentage) - Decrease treasury by given percentage
// Round down the values after each calculation.

function cityTaxes(name, population, treasury ){
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury +=  Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage){
            this.population +=  Math.floor(this.population * (percentage / 100)); 
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.population * (percentage / 100)); 
        }
    }
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);


city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
