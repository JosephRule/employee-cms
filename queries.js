const db = require('./db/connection');

// get departments
const getDepts = function() {
    const sql = `SELECT * FROM departments;`

    db.query(sql, (err, res) => {
        if (err) {
            console.log("error!");
            return;
        }
        console.log(res);
    })
};

// get roles
const getRoles = function() {
    const sql = `SELECT * FROM roles;`

    db.query(sql, (err, res) => {
        if (err) {
            console.log("error!");
            return;
        }
        console.log(res);
    })
};


// get employees
const getRoles = function() {
    const sql = `SELECT * FROM roles;`

    db.query(sql, (err, res) => {
        if (err) {
            console.log("error!");
            return;
        }
        console.log(res);
    })
};

// add department


// add role


// add employee


// update employee

