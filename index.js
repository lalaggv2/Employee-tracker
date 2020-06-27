require('dotenv').config();

const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql");
const db = require("./db/Database");
//const { updateDepartments, updateRoles } = require('./db/Database');
const connection = require('./db/connection');
// const { type } = require("os");


//create a prommpt when the app is started to ask the user what he wants to do
//choices add dept, add role, addemployee

//esta es la que hace las preguntas
runSearch();

function runSearch() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add department',
        'Add a new employee',
        'Add role',
        'View departments',
        'View roles',
        'View employees',
        'Update employee',
        'Remove employee',
        'exit',
      ],
    })
    .then(function (answer) {
      switch (answer.action) {

        case 'View departments':
          viewDepartments()
          break;

        case 'View roles':
          viewRoles()
          break;

        case 'View employees':
          viewEmployees()
          break;

        case 'Add department':
          addDepartment();
          break;

        case 'Add a new employee':
          addNewEmployee()
          break;

        case 'Add role':
          addNewRole()
          break;


        case 'Remove employee':
          deleteEmployee()
          break;

        case 'Update employee':
          updateEmployee()
          break;

        case 'exit':
          console.log('Good-bye.');
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
  connection.query("SELECT * FROM departments", (err, result) => {
    if (err) throw err;
    console.table(result);
    runSearch();
  })
}

function addNewEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "first_name"
    },
    {
      type: "input",
      message: "What is the employee's last name?",
      name: "last_name"
    },
    {
      type: "input",
      message: "What is the employee's role id number?",
      name: "role_id"
    },
    {
      type: "input",
      message: "What is the employee's manager ID number?",
      name: "manager_id"
    }
  ]).then(answer => {
    connection.query("INSERT INTO employee_trackerdb.employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [
      answer.first_name,
      answer.last_name,
      answer.role_id,
      answer.manager_id,
    ], (err, res) => {
      if (err) throw err;
      // console.log("Employee has been added:)");
      runSearch();
    });
  });
};

function addNewRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the title?",
      name: "title"
    },
    {
      type: "input",
      message: "What is the salary?",
      name: "salary"
    },
    {
      type: "input",
      message: "What is the department ID this role belongs to?",
      name: "department_id",
      //choices: ["IT", 'Finance', "Marketing", "Operations", "Janitorial", "Payroll", "Drafting"]
    }
  ]).then(answer => {
    connection.query("INSERT INTO employee_trackerdb.roles(title, salary, department_id) VALUES (?, ?, ?)", [
      answer.title,
      answer.salary,
      answer.department_id,
    ], (err, res) => {
      if (err) throw err;
      runSearch();
    });
  });
};

function viewEmployees() {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.role_id FROM employee LEFT JOIN roles ON employee.role_id = roles.id", (err, result) => {
    if (err) throw err;
    console.table(result);
    runSearch();
  });
};

function viewRoles() {
  connection.query("SELECT * FROM roles", (err, result) => {
    if (err) throw err;
    console.table(result);
    runSearch();
  })
}

function updateEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Which employee ID would you like to update?",
      name: "employeeid"
    },
    {
      type: "input",
      message: "What is the employee first name?",
      name: "employeefirstname"
    },
    {
      type: "input",
      message: "What is the employee last name?",
      name: "employeelastname"
    },
    {
      type: "input",
      message: "What is the employee new role id?",
      name: "role_id"
    },
    {
      type: "input",
      message: "What is the employee new manager id?",
      name: "manager_id"
    }
  ]).then(answer => {
    connection.query("UPDATE employee_trackerdb.employee SET first_name =?, last_name =?, role_id=?, manager_id=? WHERE id=?",
      [
        answer.employeefirstname,
        answer.employeelastname,
        answer.role_id,
        answer.manager_id,
        answer.employeeid
      ], (err, res) => {
        if (err) throw err;
        //console.log("Employee has been updated:)");
        runSearch();
      });
  })
}

function deleteEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What employee would you like to delete?",
      name: "employeeDelete"
    }
  ]).then(res => {
    connection.query("DELETE from employee_trackerdb.employee WHERE id=?",
      [
        res.employeeDelete
      ], (err, res) => {
        if (err) throw err;
        console.log("Employee has been deleted:)");
        runSearch();
      })
  })
}
