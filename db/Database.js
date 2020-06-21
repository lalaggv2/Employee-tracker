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
  }


  createEmployee(newEmployee) {
    return this.connection.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id)) VALUES ("${newEmployee}")`
      // first_name: answer.employee_first, 
      // last_name: answer.employee_last,
      // role_id: answer.role,
      // manager_id: answer.manager,

    );
  }


  createRole() {
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
    );
  }

  findDepartments() {//y los mismo para los demas
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
    );
  }
  findEmployees() {//y los mismo para los demas
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
    );
  }
  findRoles() {//y los mismo para los demas
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
    );
  }
  // y otro para update
  updateDepartments() {//y los mismo para los demas
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
    );
  }
  updateEmployees() {//y los mismo para los demas
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
    );
  }
  updateRoles() {//y los mismo para los demas
    return this.connection.query(
      // SELECT ...LO QUE SEA LA QUERY
    );
  }
}



module.exports = new Database(connection);
