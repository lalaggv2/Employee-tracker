DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;


-- create a department tabl

-- create a role table

-- cre

CREATE TABLE id
(
 id INT PRIMARY KEY,
 dpt_name VARCHAR(30)
  PRIMARY KEY (id)
);

CREATE TABLE roles
(
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
)

CREATE TABLE employee
(
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
)

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Founder", 250, 10);

SELECT * FROM departmentsDB;
select * from role_id;
SELECT * FROM employee;



