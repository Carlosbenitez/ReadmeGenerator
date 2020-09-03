const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const axios = require("axios")
// array of questions for user
const fs = require("fs")
const questions = [
    {
        type: "input",
        message: "What is the title?",
        name: "title",
    },

    {
        type: "input",
        message: "What is the description?",
        name: "description",
    },

    {
        type: "input",
        message: "How do you install your application?",
        name: "installation",
    },

    {
        type: "input",
        message: "What is the use of this application?",
        name: "usage",
    },

    {
        type: "input",
        message: "Would you like to give credit to a person or resource?",
        name: "credits",
    },

    {
        type: "input",
        message: "Any licensing information to add?",
        name: "license",
    },

    {
        type:"input",
        message:"Would you like to add any badges? Copy and paste them here.",
        name:"badges",
    },

    {
        type:"input",
        message:"Would you like your viewers to be able to contribute? If so, explain how.",
        name:"contributing",
    },

    {
        type:"input",
        message:"Are there any tests for this application? If so, how do you run them?",
        name:"test",
    },

    {
        type:"input",
        message:"What is your GitHub profile name?",
        name:"githubProfile",
    },

    {
        type:"input",
        message:"What is your email address?",
        name:"email",
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function () {

    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {


        const README = generateMarkdown(data)
        writeToFile("./README.md", README)
    })
}

// function call to initialize program
init();
