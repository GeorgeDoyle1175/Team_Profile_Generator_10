const inquirer = require('inquirer');
const fs = require('fs');

const teamMembers = [];

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

    getOfficeNumber() {
        return this.officeNumber;
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

    getGithub(){
        return this.github;
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

    getSchool(){
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}
//Export Class Constructors
module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
  };

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

function promptManagerData() {
    console.log("\nPlease provide the following information about the manager:");

    // Use the `engineerprompts` variable to prompt the user for the engineer's information
    return inquirer.prompt(managerPrompts).then((response) => {
        // Create a new Engineer object with the user's input
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        return manager;
    });
}

function promptEngineerData() {
    console.log("\nPlease provide the following information about the engineer:");

    // Use the `engineerprompts` variable to prompt the user for the engineer's information
    return inquirer.prompt(engineerPrompts).then((response) => {
        // Create a new Engineer object with the user's input
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        return engineer;
    });
}

// Function to prompt the user for intern data
function promptInternData() {
    console.log("\nPlease provide the following information about the intern:");

    // Use the `internprompts` variable to prompt the user for the intern's information
    return inquirer.prompt(internPrompts).then((response) => {
        // Create a new Intern object with the user's input
        const intern = new Intern(response.name, response.id, response.email, response.school);
        return intern;
    });
}

function generateHTML(teamMembers) {
    const header = `
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Members</title>
        <link rel="stylesheet" href="./lib/styles.css">
      </head>
    `;

    let cards = '';
    let count = 0;
    for (const teamMember of teamMembers) {
      let info = '';
      if (teamMember.getRole() === 'Manager') {
        info = `Office Number: ${teamMember.getOfficeNumber()}`;
      } else if (teamMember.getRole() === 'Engineer') {
        info = `GitHub: <a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a>`;
      } else if (teamMember.getRole() === 'Intern') {
        info = `School: ${teamMember.getSchool()}`;
      }

      const card = `
        <div class="card">
          <div class="card-header">
            <h2>${teamMember.getName()}</h2>
            <h3>${teamMember.getRole()}</h3>
          </div>
          <div class="card-body">
            <div>ID: ${teamMember.getID()}</div>
            <div>Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></div>
            <div>${info}</div>
          </div>
        </div>
      `;

      cards += card;
      count++;

      if (count % 5 === 0) {
        cards += '</div><div class="row">';
      }
    }

    const html = `
      <!DOCTYPE html>
      <html>
        ${header}
        <body>
          <div class="container">
            <h1>Team Members</h1>
            <div class="cards">
              <div class="row">
                ${cards}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    fs.writeFile('index.html', html, (err) => {
      if (err) throw err;
      console.log('index.html created successfully!');
    });
  }

const init = async () => {
    //try {
      // Prompt the user for the team manager's data
      const managerData = await promptManagerData('Manager');

      // Initialize an array to hold the team members
      const teamMembers = [];

      // Push team manager's data to teamMembers array
      teamMembers.push(managerData);

      const addTeamMember = () => {
        inquirer
          .prompt({
            type: 'list',
            name: 'teamMemberType',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team'],
          })
          .then((answers) => {
            const teamMemberType = answers.teamMemberType;

            if (teamMemberType === 'Finish building my team') {
              console.log('Finished building team!');
              generateHTML(teamMembers);
            } else {
              if (teamMemberType === 'Engineer') {
                promptEngineerData().then((teamMemberData) => {
                  teamMembers.push(teamMemberData);
                  addTeamMember();
                });
              } else {
                promptInternData().then((teamMemberData) => {
                  teamMembers.push(teamMemberData);
                  addTeamMember();
                });
              }
            }
          })
          .catch(error => console.error(error))
      };

      addTeamMember();
    // } catch (error) {
    //   console.error('Error occurred while building team:', error);
    // }
  };

init();
