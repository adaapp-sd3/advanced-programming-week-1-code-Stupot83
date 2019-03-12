const chai = require('chai');
const expect = chai.expect;

const Student = require('../Student.js');

describe('and a new instantiation of the Student class is created', () => {

    let newStudent = new Student();

    it('should allow an object instantiated from the class', () => {
        expect(newStudent).to.be.an.instanceOf(Student);
    });
});

describe('and the Student object is created with the correct fields', ()=> {

    let newStudent = new Student("Stuart", "11B");
    
    it('should create a new Student object with the correct data', ()=>{
        expect(newStudent.name).to.equal("Stuart");
        expect(newStudent.tutorGroup).to.equal("11B");
    });
});

describe('and the name is set to Stuart', ()=> {

    let newStudent = new Student("Stuart", "11B");
    
    it('should confirm the correct value for student name', ()=>{
        expect(newStudent.getName()).to.equal("Stuart");
    });
});

describe('and the year is set to 11', ()=> {

    let newStudent = new Student("Stuart", "11B");
    
    it('should confirm the correct value for year', ()=>{
        expect(newStudent.getYearGroup()).to.equal(11);
    });
});

describe('and the form is set to B', ()=> {

    let newStudent = new Student("Stuart", "11B");
    
    it('should confirm the correct value for form', ()=>{
        expect(newStudent.getForm()).to.equal("B");
    });
});

describe('and the student object is constructed', () => {

    let newStudent = new Student("Stuart", "11B");

    it('and the correct keys are returned', () => {
        expect(newStudent).to.have.all.keys('name', 'tutorGroup');
    });
});

