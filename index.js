const db = require('./db/connection');
const inquirer = require("inquirer");

const choices = [
    {name: "View All departments", value: "call view departments functions"},
    {name: "View all roles", value: "call view roles function"},
    {name: "View all employees", value: "call view employees function"},
    {name: "Add a department", value: "call add department function"},
    {name: "Add a role", value: "call add role function"},
    {name: "Add an employee", value: "call add employee function"},
    {name: "Update an employee role", value: "call update employee role function"}
]



// init function call the prompt menu
// prompt menu gives questions and returns

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

const promptExit = () => {
    return inquirer.prompt(
        {
            type: "confirm",
            name: "exit",
            message: "Exit the program?",
            default: true
        }
    )
}

function init() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: choices,
            default: false
        })
        .then( choice => {

            // case when or if choice == A
                // inquierer prompt
                // take input and run sql
                // prmopt exit
                    // exit()
                    // init()
            // if choice B
                // embed inquierer prompt here and pass it to another .then()?
            // Case when

        })
}

init();
