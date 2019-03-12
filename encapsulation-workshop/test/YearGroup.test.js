const chai = require("chai");
const expect = require('chai').expect;

const YearGroup = require('../YearGroup.js');

describe('and the YearGroup object is created', () => {

    let myYearGroup = new YearGroup();

    it('should allow an object instantiated from the class', () => {
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    });
});

describe('and the year is set at 2', () => {

    let myYearGroup = new YearGroup(2, "Boris");

    it('should return the correct value for year', () => {
        expect(myYearGroup.getYear()).to.equal(2);
    });
});

describe('and the head of year is set at Hazel', () => {

    let myYearGroup = new YearGroup(9, "Hazel");

    it('should return the correct name for the head of year', () => {
        expect(myYearGroup.getHeadOfYear()).to.equal("Hazel");
    });
});

describe('and the year and head of year are constructed', () => {

    let myYearGroup = new YearGroup(11, "Timothy");

    it('should create a year group of year 11 with head of year as Timothy', () => {
        expect(myYearGroup.year).to.equal(11);
        expect(myYearGroup.headOfYear).to.equal("Timothy");
    });
});