function solve(input){
  
    let sum = 0;
    let inverseValues = 0;
    let concatNumbers = '';

    for (let index = 0; index < input.length; index++) {
        sum += input[index];
        inverseValues += 1 /input[index];
        concatNumbers +=input[index];
    }
    
    console.log(sum);
    console.log(inverseValues);
    console.log(concatNumbers);
}

solve([2, 4, 8, 16]);