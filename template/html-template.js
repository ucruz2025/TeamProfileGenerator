//May need to recrate into classes for 

const manager = manager => {
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

//Function structure should be the same as displayTeam on manager(managers)
//This case it will be the function allManagers
const displayManagers = managers => {
    const managerCards = 
    `<!--Employee type-->
            <div class="row jumbotron justify-content-center">
                <h2>Managers</h2>
                <div class="col-12 d-flex justify-content-center"> 
                    
                    ${manager(managers)}
                </div>
            </div>
            `;
    return managerCards
};

const engineer = engineer => {
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
    `    <!--Employee type-->
        <div class="row jumbotron justify-content-center">
            <h2>Engineers</h2>
            <div class="col-12 d-flex justify-content-center"> 
                ${engineer(engineers)}
            </div>
        </div>
    
    `;
    return engineerCard;
};

const intern = intern => {
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
            ${intern(interns)}
        </div>
    </div>
    
    `;
    return internCard;
};

//conver this into class?
const allManagers = managers => {
    const 
}

const displayTeam = crew => {
    const team = [];

    team.push(crew.filter(employee => employee.getRole() === "Manager").map(manager => displayManagers(manager)));

    team.push(crew.filter(employee => employee.getRole() === "Engineer").map(engineer => displayEngineers(engineer)).join(''));

    team.push(crew.filter(employee => employee.getRole() === "Intern").map(intern => displayInterns(intern)).join(''));

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