import { expect } from 'chai';
import solve from '../01. Sub Sum.js';

describe('Tests Sub Sum', function(){
    it('Should return NaN  when non array is provided for first argument', () => {
        let actualSum = solve(10, 0, 1);

        expect(actualSum).to.be.NaN;
    })

    it('Should return sum of numbers', () => {
        let actualSum = solve([10,20,30,40,50], 0, 2);

        expect(actualSum).to.be.equal(60)
    })

    it('Should return NaN when in the array are not only numbers', () => {
        expect(solve(['',20,30,40,50], 0, 2)).to.be.NaN;
        expect(solve([{},20,30,40,50], 0, 2)).to.be.NaN;
        expect(solve([undefined,20,30,40,50], 0, 2)).to.be.NaN;
        expect(solve([true,20,30,40,50], 0, 2)).to.be.NaN;
        expect(solve([[],20,30,40,50], 0, 2)).to.be.NaN;
    })

    it('Should return 0 when start index is negative number', () => {
        let actualStartIndex = solve([10,20,30], -5, 1)

        expect(actualStartIndex).to.be.equal(30);
    })

    it('Should return last element when end index length is more than arrays length', () => {
        let actualStartIndex = solve([10,20,30], 0, 30)

        expect(actualStartIndex).to.be.equal(60);
    })
});