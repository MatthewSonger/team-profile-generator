const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generate-html');

const teamArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Manager Name (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter A Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee ID (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter An Employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee Email Address (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter An Employee Email Address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Employee Office Phone Number (Required)",
        validate: officeNumber => {
            if (officeNumber){
                return true;
            } else {
                console.log("Please Enter The Employees Office Phone Number!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'proceedChoice',
        message: 'How would you like to proceed?',
        choices: ['Add an engineer', 'Add an intern', 'Finish input and generate HTML']
    }
]


const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Engineer Name (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter A Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee ID (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter An Employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee Email Address (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter An Employee Email Address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubName',
        message: "GitHub Username (Required)",
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log("Please Enter A GitHub Username!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'proceedChoice',
        message: 'How would you like to proceed?',
        choices: ['Add an engineer', 'Add an intern', 'Finish input and generate HTML']
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Intern Name (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter A Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee ID (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter An Employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee Email Address (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter An Employee Email Address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'schoolName',
        message: "Intern's School Name",
        validate: schoolName => {
            if (schoolName) {
                return true;
            } else {
                console.log("Please Enter The Intern's School Name!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'proceedChoice',
        message: 'How would you like to proceed?',
        choices: ['Add an engineer', 'Add an intern', 'Finish input and generate HTML']
    }
]

const init = function () {
    inquirer
    .prompt(managerQuestions)
    .then(teamData => {
        const manager = new Manager(teamData);
        teamArray.push(manager);

        addTeamMember(teamData);
    })
}

const createEngineer = function(data) {
    inquirer
    .prompt(engineerQuestions)
    .then(engineerData => {
        const engineer = new Engineer(engineerData);
        teamArray.push(engineer);

        addTeamMember(engineerData);
    });
}

const createIntern = function(data) {
    inquirer
    .prompt(internQuestions)
    .then(internData => {
        const intern = new Intern(internData);
        teamArray.push(intern);

        addTeamMember(internData);
    });
}

const addTeamMember = function (data) {

    if (data.proceedChoice === 'Add an engineer') {
        createEngineer(data);
    } else if (data.proceedChoice === 'Add an intern'){
        createIntern(data)
    } else {
        generateHTML(teamArray);
    }
}

init();