const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
// array of questions for user input
const questions = [
    {
        type:"input",
        name: "title",
        message: "Enter the title of your project",
    },
    {
        type:"input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type:"input",
        name: "install",
        message: "What are the installation steps for this project?",
    },
    {
        type:"input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type:"list",
        name: "license",
        message: "Enter the license for this project.",
        choices: ["MIT","Apache","Mozilla","Boost","None"]
    },
    {
        type:"input",
        name: "contribute",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
    },
    {
        type:"input",
        name: "test",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
        type:"input",
        name: "github",
        message: "Enter your Github username",
    },
    {
        type:"input",
        name: "email",
        message: "Enter your email",
    },
    {
        type:"input",
        name: "questions",
        message: "Enter any questions you may have",
    },
];

function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        fs.writeFileSync('README.md',generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
