class Validate{
    // Function that validates name input
    name = answer => {
        if(answer !== ""){
            return true;
        } else
        return "Please enter AT LEAST one character.";
    }

    // Function that validates ID input
    ID = answer => {
        const pass = answer.match(/^[1-999]\d*$/);
        if (pass){
            return true;
        }else
        return "Please enter a number between 1-999";
    }

    // Function that validates email input
    email = answer => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass){
            return true;
        }else
        return "Please enter a valid email address.";
    }

    // Function that validates Manage's Office Number input
    manOffNum = answer => {
        const pass = answer.match(/^[1-999]\d*$/);
        if (pass){ 
            return true;
        }else
        return "Please enter a Office Number between 1-999."
    }

    // Function that validates Engineer's Github input
    engiGit = answer => {
        if(answer !== ""){
            return true;
        }else
        return "Please enter the engineer's Github username."
    }

    // Function that validates Intern's school input
    intSchool = answer => {
        if(answer !== ""){
            return true;
        }else
        return "Please enter the intern's school."
    }
}

module.exports = new Validate();