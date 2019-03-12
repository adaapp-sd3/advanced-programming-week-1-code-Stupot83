const assert = require('assert');
const chai = require("chai");
const expect = require('chai').expect;

const YearGroup = require('../YearGroup.js');

describe('YearGroup', () => {

    beforeEach(() => {
        let myYearGroup = new YearGroup();
    })

    it('should allow an object instantiated from the class', () => {
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    });
});


