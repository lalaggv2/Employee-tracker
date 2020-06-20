require('dotenv').config();
//require inquire and console.table
//require the database class
//const express = require("express");
const inquirer = require("inquirer");
const console = require("console.table");
const mysql = require("mysql");
const db = require("./db/Database");
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

        // case 'Find data within a specific range':
        //   rangeSearch();
        //   break;

        // case 'Search for a specific song':
        //   songSearch();
        //   break;

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
      name: 'employee first',
      type: 'input',
      message: "What's the first name of the employee you would like to add?"
    }, {
      name: "employee last",
      type: 'input',
      message: 'What is the last name of the employee?'
    })
    .then(answer => {
      db.createEmployee(answer.employee)
      runSearch()
    })
};

    //   let query = "SELECT  FROM id WHERE ?";
    //   connection.query(query, { department: answer.department }, function (err, res) {
    //     if (err) throw err;

    //   })
    // })


// function artistSearch() {
//   inquirer
//     .prompt({
//       name: 'artist',
//       type: 'input',
//       message: 'What artist would you like to search for?',
//     })
//     .then(function (answer) {
//       var query = 'SELECT position, song, year FROM top5000 WHERE ?';
//       connection.query(query, { artist: answer.artist }, function (err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             'Position: ' +
//               res[i].position +
//               ' || Song: ' +
//               res[i].song +
//               ' || Year: ' +
//               res[i].year
//           );
//         }
//         runSearch();
//       });
//     });
// }

// function multiSearch() {
//   var query = 'SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1';
//   connection.query(query, function (err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
//     runSearch();
//   });
// }

// function rangeSearch() {
//   inquirer
//     .prompt([
//       {
//         name: 'start',
//         type: 'input',
//         message: 'Enter starting position: ',
//         validate: function (value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         },
//       },
//       {
//         name: 'end',
//         type: 'input',
//         message: 'Enter ending position: ',
//         validate: function (value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         },
//       },
//     ])
//     .then(function (answer) {
//       var query =
//         'SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?';
//       connection.query(query, [answer.start, answer.end], function (err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             'Position: ' +
//               res[i].position +
//               ' || Song: ' +
//               res[i].song +
//               ' || Artist: ' +
//               res[i].artist +
//               ' || Year: ' +
//               res[i].year
//           );
//         }
//         runSearch();
//       });
//     });
// }

// function songSearch() {
//   inquirer
//     .prompt({
//       name: 'song',
//       type: 'input',
//       message: 'What song would you like to look for?',
//     })
//     .then(function (answer) {
//       console.log(answer.song);
//       connection.query(
//         'SELECT * FROM top5000 WHERE ?',
//         { song: answer.song },
//         function (err, res) {
//           if (err) throw err;
//           console.log(
//             'Position: ' +
//               res[0].position +
//               ' || Song: ' +
//               res[0].song +
//               ' || Artist: ' +
//               res[0].artist +
//               ' || Year: ' +
//               res[0].year
//           );
//           runSearch();
//         }
//       );
//     });
// }

/* create aprompt when the app is tstarted. this will ask the user what ghty wanto to do: update, create or view (array of choices as objects) {
  name:
  value:
}
]

funciones to handle the response and call an especific function

if the user sele ts to biew employees, its' going to call the getEmployees function below

call the findEmployees function for the database class that we created */