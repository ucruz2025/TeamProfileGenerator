const Employee = require('../teamMembers/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create object", () => {
            const employee = new Employee();

            expect(typeof(employee)).toBe('object');
        });
    });
    describe("Name", () => {
        it("should return the same name", () => {
            const name = "Juan";
            const employee = new Employee(name);

            expect(employee.getName()).toEqual(name);
        });
    });
    describe("Id", () => {
        it("should return the same id", () => {
            const id = 6478;
            const employee = new Employee("ex", id);

            expect(employee.getId()).toEqual(id);
        });
    });
    describe("Email", () => {
        it("should return the same email", () => {
            const email = "juan78@gmail.com";
            const employee = new Employee("ex", 1, email);

            expect(employee.getEmail()).toEqual(email);
        });
    });
    describe("Role", () => {
        it("should return the role of employee", () => {
            const employee = new Employee();

            expect(employee.getRole()).toEqual("Employee")
        });
    });
});