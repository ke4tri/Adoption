const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

function executeThisCodeAfterFileLoaded () {
    console.log('request', this); // I think whats in the quotes here changes too
}

function executeThisCodeIfXhrFails () {
    console.log("Shit don't do Good");
}

const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error',executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/characters.json'); // What is in quotes is what will change
    myRequest.send();
};