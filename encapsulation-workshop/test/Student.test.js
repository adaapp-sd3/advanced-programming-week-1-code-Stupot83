const chai = require('chai');
const expect = chai.expect;

const Student = require('../Student.js');

describe('and a new instantiation of the student class is created with the correct fields', ()=> {

    let newStudent = new Student("Stuart", "11B");
    
    it('should create a new Student object with the correct data', ()=>{
        expect(newStudent.name).to.equal("Stuart");
        expect(newStudent.tutorGroup).to.equal("11B");
    });
});