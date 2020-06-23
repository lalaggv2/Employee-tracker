DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;


-- create a department tabl

-- create a role table

-- cre

CREATE TABLE departments
(
 id INT PRIMARY KEY AUTO_INCREMENT,
 dpt_name VARCHAR(30)
);

CREATE TABLE roles
(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE employee
(
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
);

SELECT * FROM departments;
select * from roles;
SELECT * FROM employee;



