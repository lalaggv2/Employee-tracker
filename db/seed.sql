USE employee_trackerDB;

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Founder", 250000, 10);

USE employee;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anthony", "Cusack", 1, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Leslie", "Grey", 2, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Samantha", "Ling", 3, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Arley", "Robbins", 5, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("David", "Linaza", 4, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Korayev", 4, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jackson", "Adams", 5, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Miranda", "Bailey", 6, 8);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Rita", "Pang", 7, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("April", "Kepner", 7, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Niki", "Roches", 8, 12);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Cristina", "Ypsilon", 8, 12);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Derek", "Shepherd", 9, 12);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mark", "Sloan", 10, 14);









INSERT INTO roles (title, salary, department_id)
VALUE ("Salesperson", 15000, 1);

INSERT INTO roles (title, salary, department_id)
VALUE ("Trader", 29000, 1);

INSERT INTO roles (title, salary, department_id)
VALUE ("Business Manager", 111000, 1);

INSERT INTO roles (title, salary, department_id)
VALUE ("Technology Lead", 120600, 2);

INSERT INTO roles (title, salary, department_id)
VALUE ("Software Engineer", 76000, 2);

INSERT INTO roles (title, salary, department_id)
VALUE ("Accountant", 41050, 3);

INSERT INTO roles (title, salary, department_id)
VALUE ("Operations Specialist", 31200, 4);

INSERT INTO roles (title, salary, department_id)
VALUE ("Lawyer", 240090, 5);

INSERT INTO roles (title, salary, department_id)
VALUE ("Compliance Officer", 122000, 5);

INSERT INTO roles (title, salary, department_id)
VALUE ("Internal Audit Officer", 149000, 6);


INSERT INTO departments (department_name)
VALUE ("Front Office");

INSERT INTO departments (department_name)
VALUE ("Technology");

INSERT INTO departments (department_name)
VALUE ("Financial Controllers");

INSERT INTO departments (department_name)
VALUE ("Operations");

INSERT INTO departments (department_name)
VALUE ("Legal and Compliance");

INSERT INTO departments (department_name)
VALUE ("Internal Audit");

