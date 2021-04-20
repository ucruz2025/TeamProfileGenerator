class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

        this.getName = () => name;

        this.getId = () => id;

        this.getEmail = () => email;

        this.getRole = () => "Employee";
    }
}

module.exports = Employee;