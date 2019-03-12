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