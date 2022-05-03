// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

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

  // License Options
  {
    type: "checkbox",
    name: "licensing",
    message:
      "From the following list, select the license that applies to your project.(Required)   =>:",
    choices: [
      "None",
      "MIT License",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
      "CDDL-1.0",
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
    name: "testing",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();

questions().then(function (userInput) {
  console.log(userInput);
});
