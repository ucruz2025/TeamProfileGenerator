const Engineer = require('./teamMembers/Engineer');
const Intern = require('./teamMembers/Intern');
const Manager = require('./teamMembers/Manager');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const render = require('./template/html-template');
const outputDIR = path.resolve(__dirname, "renderedFiles");
const outputPath = path.join(outputDIR, "team.html");

const crewMembers = [];
const ids = [];

const init = () => {
    console.log("Let's build your team.");

    const createTeam = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'crewChoice',
                message: "Which type of team member would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "Don't want to add anymore members"]
            }
        ]).then(answer => {
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
        })
    }

    const generateManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please provide the name of one of your managers",
                validate: valName
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What's thier id?",
                validate: valID
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What's their email?",
                validate: valEmail
            },
            {
                type: 'input',
                name: 'managerOfficeNum',
                message: "What's their office number?",
                validate: valManOffNum
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            crewMembers.push(manager);
            ids.push(answers.managerId);
            console.log("Success!")
            createTeam();
        });
    };

    const generateEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please provide the name of one of your engineers",
                validate: valName
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What's thier id?",
                validate: valID
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What's their email?",
                validate: valEmail
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What's their Github user?",
                validate: valEngiGit
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            crewMembers.push(engineer);
            ids.push(answers.engineerId);
            console.log("Success!")
            createTeam();
        });
    };

    const generateIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please provide the name of one of your interns",
                validate: valName
            },
            {
                type: 'input',
                name: 'internId',
                message: "What's thier id?",
                validate: valID
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What's their email?",
                validate: valEmail
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What school did the intern attend?",
                validate: valIntSchool
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            crewMembers.push(intern);
            ids.push(answers.internId);
            console.log("Success!")
            createTeam();
        });
    };

    // Function that validates name input
    const valName = answer => {
        if(answer !== ""){
            return true;
        } else
        return "Please enter AT LEAST one character.";
    }

    // Function that validates ID input
    const valID = answer => {
        const pass = answer.match(/^[1-999]\d*$/);
        if (pass){
            if (ids.includes(answer)){
                return "ID already taken. Please enter a new ID.";
            }else 
            return true;
        }else
        return "Please enter a number between 1-999";
    }

    // Function that validates email input
    const valEmail = answer => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass){
            return true;
        }else
        return "Please enter a valid email address.";
    }

    // Function that validates Manage's Office Number input
    const valManOffNum = answer => {
        const pass = answer.match(/^[1-999]\d*$/);
        if (pass){
            if (ids.includes(answer)){
                return `Office Number being in use by... Please enter a new Office Number.`;
            }else 
            return true;
        }else
        return "Please enter a Office Number between 1-999."
    }

    // Function that validates Engineer's Github input
    const valEngiGit = answer => {
        if(answer !== ""){
            return true;
        }else
        return "Please enter the engineer's Github username."
    }

    // Function that validates Intern's school input
    const valIntSchool = answer => {
        if(answer !== ""){
            return true;
        }else
        return "Please enter the intern's school."
    }

    const buildTeam = () => {
        if (!fs.existsSync(outputDIR)){
            fs.mkdirSync(outputDIR)
        }
        fs.writeFileSync(outputPath, render(crewMembers), "utf-8");
    }

    createTeam();
};

init();