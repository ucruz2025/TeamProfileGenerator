const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;

        this.getRole = () => "Intern";

        this.getSchool = () => school;
    }
}

module.exports = Intern;