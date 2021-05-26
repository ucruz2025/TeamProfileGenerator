const Engineer = require('./teamMembers/Engineer');
const Intern = require('./teamMembers/Intern');
const Manager = require('./teamMembers/Manager');
const prompt = require('./prompt/questions');

const fs = require('fs');
const path = require('path');

const render = require('./template/html-template');
const outputDIR = path.resolve(__dirname, "renderedFiles");
const outputPath = path.join(outputDIR, "team.html");

const crewMembers = [];

const init = () => {
    console.log("Let's build your team.");

    const addMember = () => {
        prompt.createTeam().then(answer => {
            switch(answer.crewChoice){
                case "Manager":
                    generateManager();
                    break;
                
                case "Engineer":
                    generateEngineer();
                    break;

                case "Intern":
                    generateIntern();
                    break;

                case "Don't want to add anymore members":
                    buildTeam();
                    break;
            }
        });
    }
    
    const generateManager = () => {
        prompt.manager().then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            crewMembers.push(manager);
            console.log("Success!")
            addMember();
        });
    }

    const generateEngineer = () => {
        prompt.engineer().then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            crewMembers.push(engineer);
            console.log("Success!")
            addMember();
        });
    };

    const generateIntern = () => {
        prompt.intern().then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            crewMembers.push(intern);
            console.log("Success!")
            addMember();
        });
    };

    const buildTeam = () => {
        if (!fs.existsSync(outputDIR)){
            fs.mkdirSync(outputDIR)
        }
        fs.writeFileSync(outputPath, render(crewMembers), "utf-8");
    }
    addMember();
};

init();