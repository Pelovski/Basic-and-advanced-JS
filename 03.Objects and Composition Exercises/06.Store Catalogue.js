// You have to create a sorted catalog of store catalog. You will be given the catalog’ names and prices. 
// You need to order them in alphabetical order. 
// Input
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. 
// There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// Output
// As output, you must print all the catalog in a specified format. They must be ordered exactly as specified above. 
// The catalog must be divided into groups, by the initial of their name. The group's initial should be printed, 
// and after that, the catalog should be printed with 2 spaces before their names. For more info check the examples.

function storeCatalogue(input) {
    let catalog = {};

    for (let i = 0; i < input.length; i++) {
        let [productName, price] = input[i].split(' : ').map(x => x.trim());
        let productPrice = Number(price);
        let key = productName.substring(0, 1);

        if (!catalog[key]) {
            catalog[key] = [];
        }
        
        catalog[key].push({ productName, productPrice });
    }

    let sortedKeys = Object.keys(catalog).sort();

    sortedKeys.forEach(key => {
        console.log(key);
        
        catalog[key].sort((a, b) => a.productName.localeCompare(b.productName, undefined, { sensitivity: 'base' }));

        catalog[key].forEach(product => {
            console.log(`  ${product.productName}: ${product.productPrice}`);
        });
    });
}


const output = storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    );

    
