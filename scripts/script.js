let body = document.querySelector("body");
let inputList = document.querySelectorAll("input");
let valueArray = [];

body.addEventListener("click", (ev) => {
    if (ev.target.textContent === "Change Background Color") {
        body.classList.toggle("bgColor");
    }
    else if (ev.target.textContent === "Submit") {
        let userInput = {firstName:"", lastName:"", progName:""};
        for (let input of inputList) {
            if (input.id==="firstname") {userInput.firstName = input.value;}
            else if (input.id==="lastname") {userInput.lastName = input.value;}
            else if (input.id==="progname") {userInput.progName = input.value;}
            input.value = "";
        }
        valueArray.push(userInput);
        listItem = document.createElement("li");
        listItem.innerText = `${userInput.firstName} ${userInput.lastName}`;
        if (userInput.progName === "CIT") {
            document.querySelector(".CIT").appendChild(listItem);
        }
        else if (userInput.progName === "CST") {
            document.querySelector(".CST").appendChild(listItem);
        }
    }
});

