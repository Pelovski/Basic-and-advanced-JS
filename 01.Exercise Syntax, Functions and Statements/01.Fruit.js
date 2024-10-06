//Write a function that calculates how much money you need to buy fruit.
// You will receive a string for the type of fruit you want to buy
// a number for weight in grams, and another number for the price per kilogram.

function fruitsCal(fruit, grams, price){

        let weight = grams / 1000;
        let money = weight * price;

        let output = `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`

        console.log(output);    
}

fruitsCal('orange', 2500, 1.80);
fruitsCal('apple', 1563, 2.35);