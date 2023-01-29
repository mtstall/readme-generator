// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter project tile:',
            name: 'title',
            default: 'Project Title',
          },
          {
            type: 'input',
            message: 'Enter project description:',
            name: 'description',
            default: 'Project Description',
          },
          {
            type: 'input',
            message: 'Installation instructions:',
            name: 'installation',
            default: 'Installation Instructions',
          },
          {
              type: 'input',
              message: 'Usage:',
              name: 'usage',
              default: 'Usage',
            },
            {
              type: 'input',
              message: 'Contribution guidelines:',
              name: 'contributing',
              default: 'Contribution guidelines',
            },
            {
                type: 'input',
                message: 'Test instructions:',
                name: 'tests',
                default: 'Test instructions',
              },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
