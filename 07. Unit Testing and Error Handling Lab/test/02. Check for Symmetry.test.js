import { expect } from 'chai';
import isSymmetric from '../02. Check for Symmetry.js';

describe('Check for Symmetry tests', function () {

    it('should return false when the input is not an array', () =>{

        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(1)).to.be.false;

    });

    
    it('should return false when the array is not symmetric', () =>{

        expect(isSymmetric([10,20])).to.be.false;

    });

    it('should return true when the input is an array', () =>{

        expect(isSymmetric([])).to.be.true;

    });

    it('should return true when the array is symmetric', () =>{

        expect(isSymmetric([20,20])).to.be.true;

    });

});