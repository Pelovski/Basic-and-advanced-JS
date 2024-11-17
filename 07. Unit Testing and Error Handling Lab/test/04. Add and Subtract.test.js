import { expect } from "chai";
import createCalculator from '../04. Add and Subtract.js';

describe('Create calculator tests', function () {
    it('Should return a module (object), containing the functions add(), subtract() and get() as properties', () => {
        const result = createCalculator();
        
        expect(result).to.be.an('object');
        expect(result).to.have.keys(['add', 'subtract', 'get']);
        expect(result.add).to.be.a('function');
        expect(result.subtract).to.be.a('function');
        expect(result.get).to.be.a('function');
    });

    it('Should Keep an internal sum that cant be modified from the outside', () => {
        let result = createCalculator();

        expect(result.get()).to.equal(0);
    });

    it('The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum', () => {
        let result = createCalculator();
        result.add(5);
        result.add('10');

        expect(result.get()).to.equal(15);

        result.subtract(5);
        result.subtract('7');

        expect(result.get()).to.equal(3);
    });
});