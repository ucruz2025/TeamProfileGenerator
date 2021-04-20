const Manager = require('../teamMembers/Manager');

describe("Manager", () => {
    describe("Office Number", () => {
        it("should return the same office number", () => {
            const officeNum = "503";
            const manager = new Manager("ex", 1, "ex@ex.com", officeNum);

            expect(manager.getOfficeNum()).toBe(officeNum);
        });
    });
    describe("Role", () => {
        it("should return role as 'Manager'", () => {
            const manager = new Manager();

            expect(manager.getRole()).toBe("Manager");
        });
    });
});