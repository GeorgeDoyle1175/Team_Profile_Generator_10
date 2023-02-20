# Team_Profile_Generator_10

// async function main() {
//     try {
//       let teamMembers = [];

//       // prompt for manager data
//       let managerData = await promptForTeamMemberData('manager');
//       let manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
//       teamMembers.push(manager);

//       // prompt for additional team member data
//       let addAnother = true;
//       while (addAnother) {
//         let memberData = await promptForTeamMemberData(memberTypeData.memberType);
//         let member;

//         switch (memberTypeData.memberType) {
//           case 'engineer':
//             member = new Engineer(memberData.name, memberData.id, memberData.email, memberData.github);
//             break;
//           case 'intern':
//             member = new Intern(memberData.name, memberData.id, memberData.email, memberData.school);
//             break;
//         }

//         teamMembers.push(member);

//         addAnother = await promptForAddAnother();
//       }

//       // Generate the HTML file
//       const html = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>My Team</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
//         <style>
//           .card {
//             margin: 20px;
//             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//           }
//           .card-header {
//             background-color: #0077b6;
//             color: #fff;
//             padding: 20px;
//           }
//           .card-body {
//             padding: 20px;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="jumbotron">
//             <h1 class="display-4">My Team</h1>
//           </div>
//           <div class="row">
//             ${teamMembers.map(member => createTeamMemberCard(member)).join('\n')}
//           </div>
//         </div>
//       </body>
//       </html>
//       `;

//       // Write the HTML file
//       fs.writeFile('team.html', html, (err) => {
//         if (err) {
//           console.error(err);
//         } else
//         console.log('Successfully wrote team.html!');
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }


// // Call the main function
// main();


  function promptEngineerData() {
    console.log("\nPlease provide the following information about the engineer:");

    // Use the `engineerprompts` variable to prompt the user for the engineer's information
    inquirer.prompt(engineerprompts).then((response) => {
      // Create a new Engineer object with the user's input and add it to the teamMembers array
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      teamMembers.push(engineer);

      // Prompt the user if they want to add another team member
      promptAddTeamMember();
    });
  }

  // Function to prompt the user for intern data
  function promptInternData() {
    console.log("\nPlease provide the following information about the intern:");

    // Use the `internprompts` variable to prompt the user for the intern's information
    inquirer.prompt(internprompts).then((response) => {
      // Create a new Intern object with the user's input and add it to the teamMembers array
      const intern = new Intern(response.name, response.id, response.email, response.school);
      teamMembers.push(intern);

      // Prompt the user if they want to add another team member
      promptAddTeamMember();
    });
  }

  function promptAddTeamMember() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'memberType',
        message: 'What type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          'I don\'t want to add any more team members'
        ]
      }
    ]).then(answer => {
      switch(answer.memberType) {
        case 'Engineer':
          promptEngineerData();
          break;
        case 'Intern':
          promptInternData();
          break;
        default:
          return //generateHTML();
      }
    });
  }

     // // Generate an HTML file with the team roster
        // const teamRosterHTML = generateTeamRosterHTML(teamMembers);

        // fs.writeFileSync('team.html', teamRosterHTML);
        //console.log('Team roster saved to team.html');
