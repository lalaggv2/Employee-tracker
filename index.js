require('dotenv').config();
//require inquire and console.table
//require the database class
//const express = require("express");
const inquirer = require("inquirer");
const console = require("console.table");
const mysql = require("mysql");
const db = require("./db/Database");
const { updateDepartments, updateRoles } = require('./db/Database');
// const { type } = require("os");


//create a prommpt when the app is started to ask the user what he wants to do
//choices add dept, add role, addemployee

// connection.connect(function (err) {
//   if (err) throw err;
//   runSearch();
// });
//esta es la que hace las preguntas
runSearch();

function runSearch() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add Department',
        'Add role',
        'Add a new employee',
        'View Departments',
        'View roles',
        'View employees',
        'Update Departments',
        'Update roles',
        'Update employee',
        'exit',
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case 'Add Department':
          addDepartment();
          break;

        case 'View Departments':
          viewDepartments()
          break;

        case 'Add Employee':
          addEmployee()
          break;

        case 'View Employee':
          viewEmployee()
          break;

        case 'Add roles':
          addRoles()
          break;

        case 'View roles':
          viewRoles()
          break;

        case 'Update Departments':
          updateDepartments()
          break;

        case 'Update Employee':
          updateEmployees()
          break;

        case 'Update Roles':
          updateRoles()
          break;

        case 'exit':
          break;
        default:
          break
      }
    });
}

function addDepartment() {
  inquirer.prompt({
    name: 'name',
    type: 'text',
    message: "What is the department name?",
  }).then(answer => {
    db.createDepartment(answer.name)
    runSearch()
  })
};

function viewDepartments() {
  inquirer.prompt({
    name: 'name',
    type: 'text',
    message: 'Which department do you want to see?'
  }).then(answer => {
    db.viewDepartment(answer.name)
    runSearch()
  })
};

function addEmployee() {
  inquirer
    .prompt({
      name: 'employee_first',
      type: 'input',
      message: "What's the first name of the employee you would like to add?"
    }, {
      name: "employee last",
      type: 'input',
      message: 'What is the last name of the employee?'
    },
      {
        name: 'role',
        type: 'list',
        message: "What's the employee role?",
        choices: [Finance, IT, Marketing, HR, Sales, Manufacturing, Engineering]
      },
      {
        name: 'manager',
        type: 'list',
        message: "Who's the employee manager?",
      })
    .then(answer => {
      db.createEmployee(answer.employee_first)
      runSearch()
    })
};

// function addEmployee() {
//   inquirer
//     .prompt({
//       name: "employee_first",
//       type: "input",
//       message: "What's the first name of the employee you would like to add?",
//     })
//     .then((answer) => {
//       const firstName = answer;

//       //second question
//       inquirer
//         .prompt({
//           name: "employee_last",
//           type: "input",
//           message: "What is the last name of the employee?",
//         })
//         .then((answer) => {
//           db.createEmployee(firstName, answer.employee_last);
//         });
//     });
// }

// function addRole() {
//   inquirer.prompt ({
//     name: 
//   });
// };