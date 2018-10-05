import {setCharacters, detailsBuilder,getpetz} from '../components/petComponents.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText); 
    setCharacters(data.pets);
    console.log('request', this);
     
    detailsBuilder(getpetz());
}

function executeThisCodeIfXhrFails () {
    console.log("Shit don't do Good");
}

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error',executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json'); 
    myRequest.send();
};


export {getPets};




