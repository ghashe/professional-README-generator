// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //  Defining variables that hold licenses and their links

  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else return ``;
}

// Adding a function that returns the image section of README
// If there is no image, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderImageSection(image) {
  if (image == "") {
    return ``;
  } else
    return `## Visual
![alt text](${image})`;
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    ${license} license has been applied to this project`;
  } else return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
## Description
    ${data.description}

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Visual](#visual)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
    
## Installation
    ${data.installation}
## Usage
    ${data.usage}
${renderLicenseSection(data.license)}

${renderImageSection(data.image)}

## Contributing
    ${data.contribution}
## Test
    ${data.test}
## Questions
    I am available at the following email address if you have any questions: ${
      data.email
    }

    Here is my GitHub account:  [${data.github}](https://github.com/${
    data.github
  })


---
_This README has been generated by ❤  [Professional-README-generator]( https://github.com/ghashe/professional-README-generator) © 2022_  
  
---`;
}

module.exports = generateMarkdown;
