const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generate-html');

const teamArray = [];

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Employee Name (Required)",
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
    }
]

const mangerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Employee Name (Required)",
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
    }
]