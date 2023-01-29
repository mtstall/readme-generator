// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
  {
    type: "input",
    message: "Enter project tile:",
    name: "title",
    default: "README Generator",
  },
  {
    type: "input",
    message: "Enter project description:",
    name: "description",
    default: "This project generates a README.",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "installation",
    default: "No installation needed.",
  },
  {
    type: "input",
    message: "Usage:",
    name: "usage",
    default: "Use this application to generate a professional README.",
  },
  {
    type: "list",
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "Artistic license 2.0",
      "Boost Software License 1.0",
      'BSD 2-clause "Simplified" license',
      'BSD 3-clause "New" or "Revised" license',
      "BSD 3-clause Clear license",
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution Share Alike 4.0",
      "Do What The F*ck You Want To Public License",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License",
    ],
    message: "Choose a license:",
    name: "license",
    default: "MIT"
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contributing",
    default: "Fork the code to make contributions!",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "tests",
    default: "Test code in the command prompt.",
  },
  {
    type: "input",
    message: "GitHub username:",
    name: "username",
    default: "mtstall",
  },
  {
    type: "input",
    message: "Email:",
    name: "email",
    default: "mtstallings95@gmail.com",
  },
])
.then((response) => {
    fs.writeFile('README.md',generateReadme(response), (err) =>
    err ? console.error(err) : console.log('Readme generated!')
    )
}
)

function generateReadme (response) {
    return `# ${response.title}
## Description
${response.description}
## Table of Contents
## Installation
${response.installation}
## Usage
${response.usage}
## License
${response.license}
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
<p><a href="https://www.github.com/${response.username}">GitHub profile</a></p>
<p>${response.email}</p>`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
