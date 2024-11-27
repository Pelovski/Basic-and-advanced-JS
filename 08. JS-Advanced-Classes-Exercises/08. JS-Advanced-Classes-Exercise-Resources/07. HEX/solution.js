// Write a class Hex, having the following functionality:
// •	The constructor takes one parameter value, which is a number
// •	valueOf() This function should return the value property of the hex class.
// •	toString() This function will show its hexadecimal value starting with "0x"
// •	plus({number}) This function should add a number or Hex object and return a new Hex object.
// •	minus({number}) This function should subtract a number or Hex object and return a new Hex object.
// •	parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.


class Hex {
   constructor(value){
    this.value = value;
   }

    valueOf(){
        return this.value;
   }

   plus(number){
    let newValue = this.value + (number instanceof Hex ? number.valueOf() : number);
    return new Hex(newValue);
   }

    minus(number){
        let newValue = this.value - (number instanceof Hex ? number.valueOf() : number);
        return new Hex(newValue);
    }

    static parse(string){
        return parseInt(string, 16);
    }

    toString(){
       return '0x' + this.value.toString(16).toUpperCase();
    }
}

let hex1 = new Hex(255);
console.log(hex1 + 1);
console.log(hex1.toString());
