class Student {
    constructor(name, form, year) {
        this.name = name;
        this.form = form;
        this.year = year;
    }

    getName() {
        return this.name;
    }

    getForm() {
        return this.form;
    }

}

module.exports = Student;