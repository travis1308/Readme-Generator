// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
        validate: nameinput => {
            if (nameinput) {
                return true;
            } else {
                console.log('Please enter your project name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for this project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for this project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List any steps for installation of this project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and any examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators, third-party assets, tutorials for guidance that aided in creating this project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
