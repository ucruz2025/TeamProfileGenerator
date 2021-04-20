const Intern = require('../teamMembers/Intern');

describe("Intern", () => {
    describe("School", () => {
        it("should return the same school name", () => {
            const school = "U of O";
            const intern = new Intern("ex", 1, "ex@ex.com", school);

            expect(intern.getSchool()).toBe(school);
        });
    });
    describe("Role", () => {
        it("should return role as 'Intern'", () => {
            const intern = new Intern();

            expect(intern.getRole()).toBe("Intern");
        });
    });
});