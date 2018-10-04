import {setCharacters} from '../components/petComponents.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.pets);
    console.log('request', this); // I think whats in the quotes here changes too
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




// import {setCharacters, charactersBuilder, getCharacterz} from '../components/characters.js';

// function executeThisCodeAfterFileLoaded () {
//    const data = JSON.parse(this.responseText);
//    setCharacters(data.characters);
//    charactersBuilder(getCharacterz());
// }

// function ececuteThisCodeIfXhrFails () {
//    console.log('things be broke');
// }

// const getCharacters = () => {
//    let myRequest = new XMLHttpRequest();
//    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
//    myRequest.addEventListener('error', ececuteThisCodeIfXhrFails);
//    myRequest.open('GET', './db/characters.json');
//    myRequest.send();
// };

// export{getCharacters};