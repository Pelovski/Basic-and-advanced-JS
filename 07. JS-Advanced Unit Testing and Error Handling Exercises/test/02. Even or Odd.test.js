import { expect } from 'chai';
import isOddOrEven from '../07. JS-Advanced-Unit-Testing-and-Error-Handling-Exercise-Resources/02. Even or Odd/02. Even or Odd.js';

describe('Is odd or even tests', function(){
    it('Should return undefined, when input is not a string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(['1'])).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven()).to.be.undefined;
    });

    it('Should return even, when the string is with even lenght', () => {
        expect(isOddOrEven('even')).to.be.equal('even');
    });

    it('Should return odd, when the string is with odd lenght', () => {
        expect(isOddOrEven('odd')).to.be.equal('odd');
    });

});