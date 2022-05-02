// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    // Project title
    {
      type: "input",
      name: "title",
      message: "What is the project title? (Required)",
      validate: (userTitleInput) => {
        if (userTitleInput) {
          return true;
        } else {
          console.log("Ops! The title must be entered!");
          return false;
        }
      },
    },

    //   Description
    {
      type: "input",
      name: "description",
      message: "Give a brief description of the project (Required)",
      verify: (userDescriptionInput) => {
        if (userDescriptionInput) {
          return true;
        } else {
          console.log(
            "Project description is required! Please briefly describe you project!"
          );
          return false;
        }
      },
    },

    //  Installation
    {
      type: "input",
      name: "installation",
      message: "What are the steps for installing the project? (Required)",
      verify: (userInstallationInput) => {
        if (userInstallationInput) {
          return true;
        } else {
          console.log(
            "Sorry! To continue, you must provide installation information.!"
          );
          return false;
        }
      },
    },

    // Usage
    {
      type: "input",
      name: "usage",
      message: "Provide instructions for use (Required)",
      verify: (userUsageInput) => {
        if (userUsageInput) {
          return true;
        } else {
          console.log("Sorry! Instructions for use must be provided.!");
          return false;
        }
      },
    },

    // License Options
    {
      type: "checkbox",
      name: "licensing",
      message:
        "From the following list, select the license that applies to your project.(Required)",
      choices: [
        "None",
        "MIT",
        "GNU-General-Public",
        "Mozilla-Public",
        "Apache",
        "Common-Development-and Distribution",
      ],
      verify: (userLicensingInput) => {
        if (userLicensingInput) {
          return true;
        } else {
          console.log(
            "Sorry! You must select the license from the list that applies to your project!"
          );
          return false;
        }
      },
    },

    // Contribution Guidelines
    {
      type: "input",
      name: "contribution",
      message: "How can people get involved with this project? (Required)",
      verify: (userContributionInput) => {
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
      message: "How can people get involved with this project? (Required)",
      verify: (userContributionInput) => {
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
      message: "Describe how you test this project (Required)",
      verify: (userTestingInput) => {
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
      message: "Please enter your GitHub username (Required)",
      verify: (userGithubInput) => {
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

    // Questions
    {
      type: "input",
      name: "email",
      message: "How do people reach out to you? Please provide your email.",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();

questions().then(function (userInput) {
  console.log(userInput);
});
