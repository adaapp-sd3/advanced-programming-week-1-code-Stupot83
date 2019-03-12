const chai = require('chai')
const expect = chai.expect;

const Teacher = require('../Teacher.js');

describe('and a new instantiation of the teacher class is created', ()=> {

    let newTeacher = new Teacher("Timothy", "TH", "Computer Science");
    
    it('should create a new Teacher object with the correct data', ()=> {
        expect(newTeacher.yearsOfService).equals(0);
        expect(newTeacher.name).equals("Timothy");
        expect(newTeacher.initials).equals("TH");
        expect(newTeacher.subject).equals("Computer Science");
    });
});

describe('and the number of years of service is 0', () => {

    let newTeacher = new Teacher("Timothy", "TH", "Computer Science");

    it('should return the correct value for years of service', () => {
        expect(newTeacher.getYearsOfService()).to.equal(0);
    });
});

describe('and the name is set to Timothy', () => {

    let newTeacher = new Teacher("Timothy", "TH", "Computer Science");

    it('should return the correct value for name ', () => {
        expect(newTeacher.getName()).to.equal("Timothy");
    });
});

describe('and the initials are set to TH', () => {

    let newTeacher = new Teacher("Timothy", "TH", "Computer Science");

    it('should return the correct value for initials ', () => {
        expect(newTeacher.getInitials()).to.equal("TH");
    });
});

describe('and the subject is set to Computer Science', () => {

    let newTeacher = new Teacher("Timothy", "TH", "Computer Science");

    it('should return the correct value for subject ', () => {
        expect(newTeacher.getSubject()).to.equal("Computer Science");
    });
});

describe('and the years of service is set to 25', () => {

    let newTeacher = new Teacher("Timothy", "TH", "Computer Science");

    newTeacher.setYearsOfService(25);

    it('should return the correct value for years of service ', () => {
        expect(newTeacher.getYearsOfService()).to.equal(25);
    });
});