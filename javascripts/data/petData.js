import {setCharacters, detailsBuilder} from '../components/petComponents.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText); // I think whats in the quotes here changes too
    setCharacters(data.pets);
    console.log('request', this); 
    detailsBuilder();
}

function executeThisCodeIfXhrFails () {
    console.log("Shit don't do Good");
}

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error',executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json'); // What is in quotes is what will change
    myRequest.send();
};


export {getPets};




