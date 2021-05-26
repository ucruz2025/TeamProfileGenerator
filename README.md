# TeamProfileGenerator

## Description
This Node.js command-line application is meant to display basic information about any team profile. The program revolves around a basic software engineering team model, where it takes the information about the employees (managers, engineers, and interns) and generates an HTML webpage showcasing this information. To make sure the code is running effectively everytime, there are also tests that can be ran to ensure the code is maintained. Below, you'll find a quick checklist as to what was needed for the program to run: 

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

Feel free to go through the checklist to ensure that the program meets these requirements.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions?](#questions?)
* [License](#license)

## Installation
To install this program, make sure to be in your Terminal and be in the right folder to download the applicaiton. Then, run this comand:
```bash
git clone git@github.com:ucruz2025/TeamProfileGenerator.git
```

## Usage
To start using the program, just run the following command in your terminal and the program will be active:
```bash
npm start
```

Then the program will prompt you some questions regarding team members you'd like to add. Answer the quesitons for one of your members, and when you're done, the program will prompt you whether you want to add another member or end the program. Once you're done and decide to end the program, then you'll find a HTML file under your 'renderedFiles' folders which you can open on any browser. 

As a reference, below is a walkthrough video as to how to use the application: 

https://drive.google.com/file/d/1zRGt1dkrCw6k0EPQJ0xU0pfIsYomktIr/view

## Contributing
Contribution details can be found under the license section of this file.
  
## Tests
To run the tests for this application, run the following command on your terminal: 

```bash
npm run test
```

It would run 4 tests that ensure that the classes within the 'teamMembers' folder are generated. You can find more information about the tests under the 'tests' folder.
  
## Questions?
If you happen to have any further questions regarding the project, feel free to reach out to:

Github: ucruz2025
Email: ucruz2025@gmail

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
Copyright 2021 Uriel Cruz Salgado

  Permission is hereby granted, free of charge, to any person obtaining a copy 
  of this software and associated documentation files (the "Software"), to deal 
  in the Software without restriction, including without limitation the rights 
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
  copies of the Software, and to permit persons to whom the Software is furnished 
  to do so, subject to the following conditions:

  Contact owner of this software. Information can be found under "Questions?" section.
      
  The above copyright notice and this permission notice shall be included in 
  all copies or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
  Live link to license: https://opensource.org/licenses/MIT
