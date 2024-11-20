// Write unit tests for a function that retrieves a character at a given index from a passed-in string.
// You are given a function named lookupChar(), which has the following functionality:
// •	lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :
// o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// o	If both parameters are of the correct type but the value of the index is incorrect 
// (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
// o	If both parameters have correct types and values - return the character at the specified index in the string.

import { expect } from "chai";
import lookupChar from '../07. JS-Advanced-Unit-Testing-and-Error-Handling-Exercise-Resources/03. Char Lookup/03. Char Lookup.js';

describe('Char lookup tests', function() {
    it('Should return undefined, when first parameter is not a string', () => {
        expect(lookupChar(1, 2)).to.be.undefined;
        expect(lookupChar(undefined, 2)).to.be.undefined;
        expect(lookupChar([], 2)).to.be.undefined;
        expect(lookupChar({}, 2)).to.be.undefined;
        expect(lookupChar(false, 2)).to.be.undefined;
        expect(lookupChar(NaN, 2)).to.be.undefined;
    });

    it('Should return undefined, when second parameter is not a number', () => {
        expect(lookupChar('first', '')).to.be.undefined;
        expect(lookupChar('first', {})).to.be.undefined;
        expect(lookupChar('first', [])).to.be.undefined;
        expect(lookupChar('first', "2")).to.be.undefined;
        expect(lookupChar('first', 1.5)).to.be.undefined;
        expect(lookupChar('first', false)).to.be.undefined;
        expect(lookupChar('first', undefined)).to.be.undefined;
        expect(lookupChar('first', NaN)).to.be.undefined;
    });

    it('Should return incorrect index, when the value of the index is incorrect ', () => {
        expect(lookupChar('first', 5)).to.equal('Incorrect index');
        expect(lookupChar('first', -1)).to.equal('Incorrect index');
        expect(lookupChar('', 0)).to.equal('Incorrect index');
        expect(lookupChar('first', 6)).to.equal('Incorrect index')
    });

    it('Should return - return the character at the specified index in the string', () => {
        expect(lookupChar('first', 4)).to.equal('t');
        expect(lookupChar('first', 0)).to.equal('f');
        expect(lookupChar('a', 0)).to.equal('a');
    });
});