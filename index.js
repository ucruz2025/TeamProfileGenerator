const Engineer = require('./teamMembers/Engineer');
const Intern = require('./teamMembers/Intern');
const Manager = require('./teamMembers/Manager');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const render = require('./template/html-template');