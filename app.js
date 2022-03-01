const generateHTML = require('./src/page-template');

const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamArray = []; 

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
        name: 'officeNumber',
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
.then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
})
};
const addEmployee = () => {
  console.log(`
  =================
  Adding employees to the team
  =================
  `);

  return inquirer.prompt ([
      {
          type: 'list',
          name: 'role',
          message: "Please choose your employee's role",
          choices: ['Engineer', 'Intern']
      },
      {
          type: 'input',
          name: 'name',
          message: "What's the name of the employee?", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter an employee's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Please enter the employee's ID.",
          validate: nameInput => {
              if  (nameInput) {                  
                  return true; 
              } else {
                  console.log ("Please enter the employee's ID!")
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter the employee's email.",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ('Please enter an email!')
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'github',
          message: "Please enter the employee's github username.",
          when: (input) => input.role === "Engineer",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the employee's github username!")
              }
          }
      },
      {
          type: 'input',
          name: 'school',
          message: "Please enter the intern's school",
          when: (input) => input.role === "Intern",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the intern's school!")
              }
          }
      },
      {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to add more team members?',
          default: false
      }
  ])
  .then(employeeData => {

    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    teamArray.push(employee); 

    if (confirmAddEmployee) {
        return addEmployee(teamArray); 
    } else {
        return teamArray;
    }
})
  };

  addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });