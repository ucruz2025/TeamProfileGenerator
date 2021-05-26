//Generates manager card
const generateManager = manager => {
    const managerCard = 
    `<!--Employee Card-->
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">${manager.getName()}</div>
                            <div class="card-subtitle">${manager.getRole()}</div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: ${manager.getId()}</li>
                                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                                <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
                            </ul>
                        </div>
                    </div>`;
    return managerCard;
}

//Displays all manager cards
const displayManagers = managers => {
    const managerCards = 
    `<!--Employee type-->
            <div class="row jumbotron justify-content-center">
                <h2>Managers</h2>
                <div class="col-12 d-flex justify-content-center"> 
                    ${allManagers(managers)}
                </div>
            </div>
            `;
    return managerCards
};

//Gathers all manager cards and puts it under one section
const allManagers = (managers) => {
  const managerGroup = [];

  managerGroup.push(managers
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager)).join(''));

  return managerGroup.join('');
}

const generateEngineer = engineer => {
    const enginerCard = 
    `<!--Employee Card-->
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">${engineer.getName()}</div>
                        <div class="card-subtitle">${engineer.getRole()}</div>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                            <li class="list-group-item">Github: ${engineer.getGithub()}</li>
                        </ul>
                    </div>
                </div>`;
    return enginerCard
}

const displayEngineers = engineers => {
    const engineerCard = 
    `<!--Employee type-->
            <div class="row jumbotron justify-content-center">
            <h2>Engineers</h2>
            <div class="col-12 d-flex justify-content-center"> 
                ${allEngineers(engineers)}
            </div>
        </div>
    
    `;
    return engineerCard;
};

const allEngineers = (engineers) => {
    const engineerGroup = [];

    engineerGroup.push(engineers
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)).join(''));

    return engineerGroup.join('');
}

const generateIntern = intern => {
    const internCard = 
    `<!--Employee Card-->
            <div class="card">
                <div class="card-header">
                    <div class="card-title">${intern.getName()}</div>
                    <div class="card-subtitle">${intern.getRole()}</div>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${intern.getId()}</li>
                        <li class="list-group-item">Email: ${intern.getEmail()}</li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>`;
    return internCard;
}

const displayInterns = interns => {
    const internCard = 
    `<!--Employee type-->
            <div class="row jumbotron justify-content-center">
            <h2>Interns</h2>
            <div class="col-12 d-flex justify-content-center"> 
                ${allInterns(interns)}
            </div>
        </div>
    
    `;
    return internCard;
};

const allInterns = (interns) => {
    const internGroup = [];

    internGroup.push(interns
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)).join(''));

    return internGroup.join('');
}

const displayTeam = crew => {
    const team = [];

    team.push(displayManagers(crew));

    team.push(displayEngineers(crew));

    team.push(displayInterns(crew));

    return team.join('');
};

const createHTML = crew => {
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron">
                    <h1 class="text-center">The Team</h1>
                </div>
            </div>
        </header>
    
        <main class="container">
            ${displayTeam(crew)}
        </main>
    </body>
</html>
    `;
    return html;
};

module.exports = createHTML