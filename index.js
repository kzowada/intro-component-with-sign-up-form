let myInputs = document.getElementsByClassName("input-field");

//####### Regexesssssss
const nameRegex = /^[a-z ,.'-]+$/i
const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const backgroundImage = "url(images/icon-error.svg)";
const borderStyle = "1px solid red";


//####Validate my Inputs value and update its CSS rules to show that the user typed in wrong
const validateInput = (input) => {
    switch (input.id) {
        case "firstName":
            if (!(nameRegex.test(input.value))) {
                document.head.appendChild(returnCssRule(input));
                input.value = null;
            } else {
                console.log("Richtiger Name");
            }
            break;
        case "lastName":
            if (!(nameRegex.test(input.value))) {
                document.head.appendChild(returnCssRule(input));
                input.value = null;
            } else {
                console.log("richtiger nachname");
            }
            break;
        case "emailAddress":
            if (!(mailRegex.test(input.value))) {
                document.head.appendChild(returnCssRule(input));
                input.value = null;
            } else {
                console.log("richtige email");
            }
            break;
        case "password":
            if (!(passwordRegex.test(input.value))) {
                document.head.appendChild(returnCssRule(input));
                input.value = null;
            } else {
                console.log("Richtiges passwort")
            }
            break;
    }
}

//Button method which calls validation method for every input inside form
const checkInputs = () => {
    for (let i = 0; i < myInputs.length; i++) {
        validateInput(myInputs[i]);
    }
}


///####### helper method that returns CSS for every input indivdually 
const returnCssRule = (input) => {
    const falsyInputCssRule = `#${input.id} {
        background: url(images/icon-error.svg);
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: 95% ;
        border: 1px solid red;
    }
    
    .${input.id}::after {
        font-size: 10px;
        content: "${input.id === "emailAddress" ? "Looks like this is not an email" : input.getAttribute("placeholder") + " cannot be empty"}";
        color: red;
        text-align: right;
        margin-top: 0.5em;
    }`;
    const errorStylesheet = document.createElement("style");
    errorStylesheet.type = "text/css"
    errorStylesheet.innerHTML = falsyInputCssRule;

    return errorStylesheet;
}