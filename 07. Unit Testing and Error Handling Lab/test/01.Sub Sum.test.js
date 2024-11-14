import { expect } from 'chai';
import solve from '../01. Sub Sum.js';

describe('Test group #1', function(){
    it('Should return NaN  when non array is provided for first argument', () => {
        let actualSum = solve(10, 0, 1);

        expect(actualSum).to.be.NaN;
    })
});