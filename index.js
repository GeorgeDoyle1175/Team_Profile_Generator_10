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

  getID(){
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
