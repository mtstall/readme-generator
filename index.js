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
      "Apache license 2.0|https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      "Artistic license 2.0|https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg",
      "Boost Software License 1.0|https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      'BSD 2-clause|https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
      'BSD 3-clause|https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
      "Creative Commons license family|https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
      "Do What The F*ck You Want To Public License|https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
      "Eclipse Public License 1.0|https://img.shields.io/badge/License-EPL_1.0-red.svg",
      "GNU Affero General Public License v3.0|https://img.shields.io/badge/License-AGPL_v3-blue.svg",
      "GNU General Public License v2.0|https://img.shields.io/badge/License-GPL_v2-blue.svg",
      "GNU General Public License v3.0|https://img.shields.io/badge/License-GPLv3-blue.svg",
      "GNU Lesser General Public License v3.0|https://img.shields.io/badge/License-LGPL_v3-blue.svg",
      "ISC|https://img.shields.io/badge/License-ISC-blue.svg",
      "MIT|https://img.shields.io/badge/License-MIT-yellow.svg",
      "Mozilla Public License 2.0|https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      "SIL Open Font License 1.1|https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
      "The Unlicense https://img.shields.io/badge/license-Unlicense-blue.svg",
      "zLib License https://img.shields.io/badge/License-Zlib-lightgrey.svg",
    ],
    message: "Choose a license:",
    name: "license",
    default: "MIT|https://img.shields.io/badge/License-MIT-yellow.svg"
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
    fs.writeFile('./example/README.md',generateReadme(response), (err) =>
    err ? console.error(err) : console.log('Readme generated!')
    )
}
)

function generateReadme (response) {
    let licenseInfo = response.license.split("|");
    return `
![License licenseInfo](${licenseInfo[1]})  
# ${response.title}
## Description
${response.description}
## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Constributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)
## Installation
${response.installation}
## Usage
${response.usage}
## License
This application is covered under the ${licenseInfo[0]} license.
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
GitHub profile: [mtstall](https://www.github.com/${response.username})    
Email address: ${response.email}  
Please email me to reach me with additional questions.`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
