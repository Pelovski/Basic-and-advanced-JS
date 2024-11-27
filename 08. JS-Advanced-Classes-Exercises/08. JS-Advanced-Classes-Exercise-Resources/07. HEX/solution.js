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
        let test = this.value.toString(16).toUpperCase()
        return test;
   }

   plus(number){
    this.value += Number(number);

    let test = valueOf();
    return this.valueOf();
   }

    toString(){
       return '0X' + this.valueOf();
    }
}

let FF = new Hex(255);
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
