const Engineer = require('../teamMembers/Engineer');

describe("Engineer", () => {
    describe("Github", () => {
        it("should return the same github username", () => {
            const github = "juan21";
            const engineer = new Engineer("ex", 1, "ex@ex.com", github);

            expect(engineer.getGithub()).toBe(github);
        });
    });
    describe("Role", () => {
        it("should return role as 'engineer'", () => {
            const engineer = new Engineer();

            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});