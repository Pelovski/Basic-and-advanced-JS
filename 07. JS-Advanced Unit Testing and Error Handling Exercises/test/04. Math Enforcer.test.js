// Your task is to test an object named mathEnforcer, which should have the following functionality: 
// •	addFive(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, add 5 to it, and return the result.
// •	subtractTen(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, subtract 10 from it, and return the result.
// •	sum(num1, num2) - A function that accepts two parameters:
// o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum.


import { expect } from "chai";
import mathEnforcer from '../04. Math Enforcer/04. Math Enforcer.js';

describe('mathEnforcer', function(){
    describe('addFive',function(){
        it('Should return correct result with number parameter', () =>{
            let actualResult = mathEnforcer;
            expect(actualResult.addFive(5)).to.equal(10);
            expect(actualResult.addFive(2.5)).to.equal(7.5);
            expect(actualResult.addFive(-5)).to.equal(0);
            expect(actualResult.addFive(0)).to.equal(5);
        });

        it('Should return undefined result with non-number parameter', () =>{
            let actualResult = mathEnforcer;
            expect(actualResult.addFive('')).to.be.undefined;
            expect(actualResult.addFive({})).to.be.undefined;
            expect(actualResult.addFive([])).to.be.undefined;
            expect(actualResult.addFive(false)).to.be.undefined;
            expect(actualResult.addFive(undefined)).to.be.undefined;
        });
    });

     describe('subtractTen',function(){
        it('Should return correct result with a number parameter', () =>{
            let actualResult = mathEnforcer;
            expect(actualResult.subtractTen(30)).to.equal(20);
            expect(actualResult.subtractTen(15.5)).to.equal(5.5);
            expect(actualResult.subtractTen(-5)).to.equal(-15);
            expect(actualResult.subtractTen(0)).to.equal(-10);
        });

        it('Should return undefined result with non-number parameter', () =>{
            let actualResult = mathEnforcer;
            expect(actualResult.subtractTen('')).to.be.undefined;
            expect(actualResult.subtractTen({})).to.be.undefined;
            expect(actualResult.subtractTen([])).to.be.undefined;
            expect(actualResult.subtractTen(false)).to.be.undefined;
            expect(actualResult.subtractTen(undefined)).to.be.undefined;
        });
    });

    describe('sum',function(){
        it('Should return correct result with number parameter', () =>{
            let actualResult = mathEnforcer;
            expect(actualResult.sum(30, 40)).to.equal(70);
            expect(actualResult.sum(30.5, 40.5)).to.equal(71);
            expect(actualResult.sum(-5, -5)).to.equal(-10);
            expect(actualResult.sum(0, 0)).to.equal(0);
        });

        it('Should return undefined result with non-number parameter', () =>{
            let actualResult = mathEnforcer;
            expect(actualResult.sum('', 2)).to.be.undefined;
            expect(actualResult.sum('2', 2)).to.be.undefined;
            expect(actualResult.sum({}, 2)).to.be.undefined;
            expect(actualResult.sum([], 2)).to.be.undefined;
            expect(actualResult.sum(false, 2)).to.be.undefined;
            expect(actualResult.sum(undefined, 2)).to.be.undefined;

            expect(actualResult.sum(2, '')).to.be.undefined;
            expect(actualResult.sum(2, '2')).to.be.undefined;
            expect(actualResult.sum(2, {})).to.be.undefined;
            expect(actualResult.sum(2, [])).to.be.undefined;
            expect(actualResult.sum(2, false)).to.be.undefined;
            expect(actualResult.sum(2, undefined)).to.be.undefined;
        });
    });
});