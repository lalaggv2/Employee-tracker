const connection = require('./connection');

class Database {

  constructor(connection) {
    this.connection = connection;
  }

  createDepartments() {
    return this.connection.query(
      SELECT ...LO QUE SEA LA QUERY
    );
  }


  createEmployee() {
    return this.connection.query(
      SELECT ...LO QUE SEA LA QUERY
    );
  }


  createRole() {
    return this.connection.query(
      SELECT ...LO QUE SEA LA QUERY
    );
  }

  findDepartments() {//y los mismo para los demas
    return this.connection.query(
      SELECT ...LO QUE SEA LA QUERY
    );
  }

  y otro para update
}
}


module.exports = new Database(connection);
}