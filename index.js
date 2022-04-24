const db = require('./db/connection');
const inquirer = require("inquirer");

const choices = [
    {name: "View All departments", value: "A"},
    {name: "View all roles", value: "B"},
    {name: "View all employees", value: "C"},
    {name: "Add a department", value: "D"},
    {name: "Add a role", value: "E"},
    {name: "Add an employee", value: "F"},
    {name: "Update an employee role", value: "G"},
    {name: "Exit the program", value: "H"}
]


const promptMenu = () => {
    "Welcome to CMS"
    return inquirer.prompt(
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: choices,
            default: false
        }
    )
};

// get departments
const getDepts = function() {
    const sql = `SELECT * FROM departments;`

    db.query(sql, (err, res) => {
        if (err) {
            console.log("error!");
            return;
        }
        console.table(res);
    })
    init();
};

// get roles
const getRoles = function() {
    const sql = `SELECT * FROM roles;`
    db.query(sql, (err, res) => {
        if (err) {
            console.log("error!");
            return;
        }
        console.table(res);
    })
    init();
};

// get employees
const getEmployees = function() {
    const sql = `SELECT * FROM employees;`
    db.query(sql, (err, res) => {
        if (err) {
            console.log("error!");
            return;
        }
        console.table(res);
    })
    init();
};

// add dept
const addDept = function() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'dept',
            message: 'Enter Department to add:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a department to add');
                  return false;
                }
            }
        }
    ).then(answer => {
        const sql = `INSERT INTO departments (dept_name) VALUES (?)`;
        const params = [answer.dept];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({error: err.message});
                return;
            }
            console.log(`${answer.dept} added to departments table`)
            init()
        })
    })
}


// add role 
const addRole = function() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'Enter role title to add:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a role to add');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter department_id title to add:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a department_id to add');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter salary title to add:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a salary to add');
                      return false;
                    }
                }
            },
        ]
    ).then(answer => {
        const sql = `INSERT INTO roles (title, department_id, salary) VALUES (?, ?, ?)`;
        const params = [answer.title, answer.department_id, answer.salary];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({error: err.message});
                return;
            }
            console.log(`${answer.role} added to roles table`)
            init()
        })
    })
}

// add employee
const addEmployee = function() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter employee first name to add:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a first name to add');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter employee last name to add:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a last name to add');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter a role_id to add:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a role_id to add');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter a manager_id to add:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a manager_id to add');
                      return false;
                    }
                }
            },
        ]
    ).then(answer => {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        const params = [answer.first_name, answer.last_name, answer.role_id, answer.manager_id];

        db.query(sql, params, (err, result) => {
            if (err) {
                return err;
            }
            console.log(`${answer.first_name} ${answer.last_name} added to employees table`)
            init()
        })  
    })
}

// update employee role 
const updateEmployeeRole = function() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'id',
                message: 'Enter employee id to update:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter an employee id to update');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter a role_id to update:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a role_id to update');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter a manager_id to update:',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a manager_id to update');
                      return false;
                    }
                }
            },
        ]
    ).then(answer => {
        const sql = `UPDATE employees SET role_id = ?, manager_id = ? WHERE id = ?`;
        const params = [answer.role_id, answer.manager_id, answer.id];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({error: err.message});
                return;
            }
            console.log(`employee id = ${answer.id}role updated`)
            init()
        })  
    })
}

const promptExit = () => {
    inquirer.prompt(
        {
            type: "confirm",
            name: "exit",
            message: "Exit the program?",
            default: true
        }
    ).then( answer => {
        if (answer.exit == true) {
            process.exit()
        }
        else {
            init()
        }
    })
}

function init() {
    promptMenu()
        .then( choice => {

            if (choice.choices == "A") {
                getDepts()
            }
            else if (choice.choices == "B") {
                getRoles();
            }
            else if (choice.choices == "C") {
                getEmployees();
            }
            else if (choice.choices == "D") {
                addDept();
            }
            else if (choice.choices == "E") {
                addRole();
            }
            else if (choice.choices == "F") {
                addEmployee();
            }
            else if (choice.choices == "G") {
                updateEmployeeRole();
            }
            else if (choice.choices == "H") {
                promptExit();
            }
        })
}

init();
