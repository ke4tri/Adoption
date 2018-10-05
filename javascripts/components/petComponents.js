import { printToDom } from "../helpers/util.js";

let pets = [];

const setCharacters = (newArray) => {
  console.log('setCharacters')  
  pets = newArray;
  };

const getpetz = () => {
  return pets
}

// Filter //
const sortPeople = (e) => {
  const pet = e.target.id;
  if(pet === 'All'){
        detailsBuilder(pets);
  }else {
    const filterPeeps = pets.filter(x => x.type === pet);  
    detailsBuilder(filterPeeps);
  }
  console.log('sortPeople() is working')
};

// Listener for each button to activate Filter above  //
const sortEvents = () => {
  const allButton = document.getElementById('All');
  const catButton = document.getElementById('cat');
  const dogButton = document.getElementById('dog');
  const dinoButton = document.getElementById('dino');
  allButton.addEventListener('click', sortPeople);
  catButton.addEventListener('click', sortPeople);
  dogButton.addEventListener('click', sortPeople);
  dinoButton.addEventListener('click', sortPeople);
  console.log("sortEvents is working");
};

//  String builder using 'forEach' instead of itterating like commented out code bottom of page //
const detailsBuilder = (characrtersArray) => {
  let domString = '';
  characrtersArray.forEach((character) => { //this turns pets/getpetz into a new array character
     domString +=   `<div class="card  mb-3 bg-light" style="width: 18rem;">`
     domString +=   `<div class="card-body ">`
     domString +=       `<h3 class="card-link text-center">${character.name}</h3>`
     domString +=   `</div>`
     domString +=     `<img class="card-img-top" src="${character.imageUrl}">`
     domString +=   `<div class="card-body ">`
     domString +=       `<h5 class="card-title text-center">${character.color}</h5>`
     domString +=       `<p class="card-title text-center">${character.specialSkill}</p>`
     domString +=   `</div>`
     domString +=   `<div class="card-body ">`
     domString +=       `<h5 class="card-link text-center" id="${character.type}">${character.type}</h5>`
     domString +=   `</div>`
     domString +=   `</div>` 
  });
  printToDom(domString);
  sortEvents();
};

export {setCharacters, detailsBuilder,sortPeople, sortEvents, getpetz}

  // const detailsBuilder = () => {
  //   let domString = '';
  //    let i=0;
  //   for(i=0;i<pets.length;i++){
  //      domString +=   `<div class="card  mb-3 bg-light" style="width: 18rem;">`
  //      domString +=   `<div class="card-body ">`
  //      domString +=       `<h3 class="card-link text-center">${pets[i]["name"]}</h3>`
  //      domString +=   `</div>`
  //      domString +=     `<img class="card-img-top" src="${pets[i]["imageUrl"]}">`
  //      domString +=   `<div class="card-body ">`
  //      domString +=       `<h5 class="card-title text-center">${pets[i]["color"]}</h5>`
  //      domString +=       `<p class="card-title text-center">${pets[i]["specialSkill"]}</p>`
  //      domString +=   `</div>`
  //      domString +=   `<div class="card-body ">`
  //      domString +=       `<h5 class="card-link text-center" id="${pets[i]["type"]}">${pets[i]["type"]}</h5>`
  //      domString +=   `</div>`
  //      domString +=   `</div>` 
  //   }
  //   printToDom(domString);
  //   sortEvents();
  // };
  
 

