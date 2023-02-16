const inquirer = require('inquirer');
const fs = require('fs');

// Define the team member classes
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }
}

// Define the prompts for the team member types
const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name:",
        validate: (value) => value ? true : "Please enter the team manager's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the team manager's employee ID:",
        validate: (value) => value ? true : "Please enter the team manager's employee ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the team manager's email address:",
        validate: (value) => value ? true : "Please enter the team manager's email address."
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team manager's office number:",
        validate: (value) => value ? true : "Please enter the team manager's office number."
    }
];

const engineerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
        validate: (value) => value ? true : "Please enter the engineer's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID:",
        validate: (value) => value ? true : "Please enter the engineer's employee ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address:",
        validate: (value) => value ? true : "Please enter the engineer's email address."
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username:",
        validate: (value) => value ? true : "Please enter the engineer's GitHub username."
    }
];

const internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:",
        validate: (value) => value ? true : "Please enter the intern's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID:",
        validate: (value) => value ? true : "Please enter the intern's employee ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email address:",
        validate: (value) => value ? true : "Please enter the intern's email address."
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school name:",
        validate: (value) => value ? true : "Please enter the intern's school name."
    }
];

// Define the prompt for adding another team member
const addAnotherPrompts = [
    {
        type: 'list',
        name: 'addAnother',
        message: 'Do you want to add another team member?',
        choices: ['Yes', 'No']
    }
];

// Define the function to prompt the user for team member data
function promptForTeamMemberData(prompts) {
    return new Promise((resolve, reject) => {
      inquirer.prompt(prompts)
        .then(answers => {
          resolve(answers);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Define the function to prompt the user for adding another team member
  function promptForAddAnother() {
    return new Promise((resolve, reject) => {
      inquirer.prompt(addAnotherPrompts)
        .then(answers => {
          resolve(answers.addAnother === 'Yes');
        })
        .catch(error => {
          reject(error);
        });
    });
  }

 // Define the function to create an HTML card for a team member
function createTeamMemberCard(member) {
    const role = member.getRole();
    const memberName = member.getName();
    const memberId = member.getID();
    const memberEmail = member.getEmail();

    let extraInfo = '';

    switch (role) {
        case 'Manager':
            extraInfo = `Office Number: ${member.officeNumber}`;
            break;
        case 'Engineer':
            extraInfo = `GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>`;
            break;
        case 'Intern':
            extraInfo = `School: ${member.school}`;
            break;
        default:
            extraInfo = '';
            break;
    }

    return `<div class="card"> <div class="card-header"> <h2>${memberName}</h2> <h3>${role}</h3> </div> <div class="card-body"> <p>ID: ${memberId}</p> <p>Email: <a href="mailto:${memberEmail}">${memberEmail}</a></p> <p>${extraInfo}</p> </div> </div>`;
}
