// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  // Project title
  {
    type: "input",
    name: "title",
    message: "What is your project title name? (Required)  =>:",
    validate: (userTitleInput) => {
      if (userTitleInput) {
        return true;
      } else {
        console.log("Ops! Title must be entered!");
        return false;
      }
    },
  },

  //   Description
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project (Required)   =>:",
    validate: (userDescriptionInput) => {
      if (userDescriptionInput) {
        return true;
      } else {
        console.log(
          "Project description is required! Please briefly describe your project!"
        );
        return false;
      }
    },
  },

  //  Installation
  {
    type: "input",
    name: "installation",
    message: "What are the steps for installing the project? (Required)   =>:",
    validate: (userInstallationInput) => {
      if (userInstallationInput) {
        return true;
      } else {
        console.log(
          "Sorry! To continue, you must provide installation information!"
        );
        return false;
      }
    },
  },

  // Usage
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for use (Required)   =>:",
    validate: (userUsageInput) => {
      if (userUsageInput) {
        return true;
      } else {
        console.log("Sorry! Instructions for use must be provided!");
        return false;
      }
    },
  },

  //   Image
  {
    type: "input",
    name: "image",
    message:
      "If you would like to include an image, please enter the relative path to the image. =>:",
  },
  // License Options
  {
    type: "checkbox",
    name: "license",
    message:
      "From the following list, select the license that applies to your project.(Required)   =>:",
    choices: [
      "None",
      "MIT", // The MIT License
      "GNUAGPLv3", // GNU AGPLv3
      "GNUGPLv3", // GNU GPLv3
      "GNULGPLv3", // GNU LGPLv3
      "Apache", // Apache License 2.0
      "Mozilla", // Mozilla Public License 2.0
      "CDDL-1.0", // CDDL-1.0
    ],
  },

  // Contribution Guidelines
  {
    type: "input",
    name: "contribution",
    message: "How can people get involved with this project? (Required)   =>:",
    validate: (userContributionInput) => {
      if (userContributionInput) {
        return true;
      } else {
        console.log(
          "Sorry! You must provide information on how to participate in the project!"
        );
        return false;
      }
    },
  },

  // Test
  {
    type: "input",
    name: "test",
    message: "Describe how you test this project (Required)   =>:",
    validate: (userTestingInput) => {
      if (userTestingInput) {
        return true;
      } else {
        console.log(
          "Sorry! to continue, the testing description must be provided!"
        );
        return false;
      }
    },
  },

  // Github Username
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username (Required)   =>:",
    validate: (userGithubInput) => {
      if (userGithubInput) {
        return true;
      } else {
        console.log(
          "Sorry! to continue, your GitHub username must be entered!"
        );
        return false;
      }
    },
  },

  // Email
  {
    type: "input",
    name: "email",
    message: "Please enter your email   =>:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
      throw errconsole.log(
        "Success! The README file has been generated! Go and check it!"
      );
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("SampleREADME.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
// init();

init();
