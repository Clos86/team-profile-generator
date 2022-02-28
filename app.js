const generateHTML = require('./src/page-template.js');
const inquirer = require('inquirer');
const fs = require('fs');


// manager questions
const addManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's ID!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is manager's email address?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's email address!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is manager's office number?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("What is manager's office number?");
                return false; 
            }
        }
    },
])
};
addManager();