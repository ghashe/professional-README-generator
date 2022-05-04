# Professional README Generator

![Badge](https://img.shields.io/badge/License-MIT-blue.svg)
## Description
    If you create an open source project on GitHub, you should have a quality README detailing the app's purpose, how to use it, how to install it, how to report issues, and how to contribute to make sure other developers can use the project and contribute to its success.This is a Node.js application that generates README.md files dynamically based on the information provided about your project when running with the command line.

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Visual](#visual)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
    
## Installation
    In order to generate your own README, simply git clone the repository to your local so that you have the Node project there on your local machine.   Use *npm install* to install the npm package dependencies listed in your package.json. The inquiry package  (https://www.npmjs.com/package/inquirer) prompts you to input your command line arguments. Using the command line, run node index.js to begin the application.The README will be generated once you answer the prompts in your command line.   When you are finished answering all the prompts, a README file will be created at the root of the repository with the name 'yourREADME.md'.
## Usage
    As soon as you run *node index.js*, the application uses the *inquirer* package to ask you a series of questions about your GitHub and your project.  Your responses are then used by the application to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email address.  After that, the application will produce markdown and a table of contents for your README based upon your answers to the Inquirer prompts. If you do not answer the optional questions such, that section will not be included in your README.  Last but not least, writeToFile  generates your project's README.md file.
## License
    MIT license has been applied to this project

## Visual
![alt text](./gif-readme/ProjectScreenshot.gif.png)

## Contributing
    It would be great if you could contribute in any way
## Test
    Simply answer the sequence of question to test the project
## Questions
    I am available at the following email address if you have any questions: emandaabyou@gmail.com

    Here is my GitHub account:  [ashe](https://github.com/ashe)

 
_This README has been generated by ❤  [Professional-README-generator]( https://github.com/ghashe/professional-README-generator) © 2022_  
  