const connection = require('./connection');

class Database {

  constructor(connection) {
    this.connection = connection;
  }

  createDepartment(departmentName) {
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
      `INSERT INTO departments (dpt_name) VALUES ("${departmentName}")`
    );
  };
};

//   createRole() {
//     return this.connection.query(
//       // SELECT ...LO QUE SEA LA QUERY
//     );
//   }

//   findEmployees() {//y los mismo para los demas
//     return this.connection.query(
//       // SELECT ...LO QUE SEA LA QUERY
//     );
//   }
//   findRoles() {//y los mismo para los demas
//     return this.connection.query(
//       // SELECT ...LO QUE SEA LA QUERY
//     );
//   }
//   // y otro para update
//   updateDepartments() {//y los mismo para los demas
//     return this.connection.query(
//       // SELECT ...LO QUE SEA LA QUERY
//     );
//   }
//   updateEmployees() {//y los mismo para los demas
//     return this.connection.query(
//       // SELECT ...LO QUE SEA LA QUERY
//     );
//   }
//   updateRoles() {//y los mismo para los demas
//     return this.connection.query(
//       // SELECT ...LO QUE SEA LA QUERY
//     );
//   }
// }
module.exports = new Database(connection);
