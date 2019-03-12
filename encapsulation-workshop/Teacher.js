class Teacher {
    constructor(name, initials, subject) {
        this.yearsOfService = 0;
        this.name = name;
        this.initials = initials;
        this.subject = subject;
    }

    getName() {
        return this.name;
    }

    getInitials() {
        return this.initials;
    }

    getSubject() {
        return this.subject;
    }
}

module.exports = Teacher;