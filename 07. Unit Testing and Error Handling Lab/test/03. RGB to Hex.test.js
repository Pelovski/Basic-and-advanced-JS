import { expect } from "chai";
import rgbToHexColor from '../03. RGB to Hex.js';

describe('RGB to hex color tests', function () {
    it('Should return undifined when one of the arguments is not a int', () => {
        expect(rgbToHexColor('1',2,3)).to.be.undefined;
        expect(rgbToHexColor(1,'2',3)).to.be.undefined;
        expect(rgbToHexColor(1,2,'3')).to.be.undefined;
        expect(rgbToHexColor([],2,3)).to.be.undefined;
        expect(rgbToHexColor({},2,3)).to.be.undefined;
        expect(rgbToHexColor(1,2,undefined)).to.be.undefined;
        expect(rgbToHexColor(1,false,3)).to.be.undefined;
    });

    it('Should return undifined when the armugents is out of the range [0, 255]', () => {
        expect(rgbToHexColor(-1,2,3)).to.be.undefined;
        expect(rgbToHexColor(300,2,3)).to.be.undefined;
        expect(rgbToHexColor(1,-2,3)).to.be.undefined;
        expect(rgbToHexColor(1,500,3)).to.be.undefined;
        expect(rgbToHexColor(1,2,-3)).to.be.undefined;
        expect(rgbToHexColor(1,2,350)).to.be.undefined;
    });

    it('Should return hex color code', () => {
        let actualResult = rgbToHexColor(255,255,0);
        let expectedResult = '#FFFF00';

        expect(actualResult).to.be.equal(expectedResult);
    });

});