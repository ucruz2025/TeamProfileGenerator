const inquirer = require('inquirer');
const validate = require('./validate');

class Question{
    createTeam = () => inquirer.prompt([
        {
            type: 'list',
            name: 'crewChoice',
            message: "What type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "Don't want to add anymore members"]
        }
    ]);
    
    manager = () => inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please provide the name of one of your managers",
            validate: validate.name
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What's thier id?",
            validate: validate.ID
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What's their email?",
            validate: validate.email
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "What's their office number?",
            validate: validate.manOffNum
        }
    ]);

    engineer = () => inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please provide the name of one of your engineers",
            validate: validate.name
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What's thier id?",
            validate: validate.ID
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What's their email?",
            validate: validate.email
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What's their Github user?",
            validate: validate.engiGit
        }
    ]);

    intern = () => inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please provide the name of one of your interns",
            validate: validate.name
        },
        {
            type: 'input',
            name: 'internId',
            message: "What's thier id?",
            validate: validate.ID
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What's their email?",
            validate: validate.email
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school did the intern attend?",
            validate: validate.intSchool
        }
    ]);
}

module.exports = new Question();