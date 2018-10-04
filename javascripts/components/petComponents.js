import { printToDom } from "../helpers/util.js";

let pets = [];

const setCharacters = (newArray) => {
  console.log('setCharacters')  
  pets = newArray;
  };

  const getpetz = () => {
    return pets
  }

const sortPeople = () => {
  // const pet = e.target.id;
  // if(pet === 'All'){
  //       detailsBuilder();
  // }else {
  //   const filterPets = pets.filter(x => x.pet === pet);
  //   detailsBuilder(filterPets);
  // }
  console.log('sortPeople() is working')

};

const sortEvents = () => {
  const allButton = document.getElementById('All');
  const catButton = document.getElementById('cat');
  const dogButton = document.getElementById('dog');
  const dinoButton = document.getElementById('dino');
  allButton.addEventListener('click', sortPeople);
  catButton.addEventListener('click', sortPeople);
  dogButton.addEventListener('click', sortPeople);
  dinoButton.addEventListener('click', sortPeople);
};


// const detailsBuilder = (ArrayOfPets) => {
//   let domString = '';
//    ArrayOfPets.forEach((pets) => {
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
//   });
//   printToDom(domString);
//   sortEvents();
// };

  const detailsBuilder = () => {
    let domString = '';
     let i=0;
    for(i=0;i<pets.length;i++){
       domString +=   `<div class="card  mb-3 bg-light" style="width: 18rem;">`
       domString +=   `<div class="card-body ">`
       domString +=       `<h3 class="card-link text-center">${pets[i]["name"]}</h3>`
       domString +=   `</div>`
       domString +=     `<img class="card-img-top" src="${pets[i]["imageUrl"]}">`
       domString +=   `<div class="card-body ">`
       domString +=       `<h5 class="card-title text-center">${pets[i]["color"]}</h5>`
       domString +=       `<p class="card-title text-center">${pets[i]["specialSkill"]}</p>`
       domString +=   `</div>`
       domString +=   `<div class="card-body ">`
       domString +=       `<h5 class="card-link text-center" id="${pets[i]["type"]}">${pets[i]["type"]}</h5>`
       domString +=   `</div>`
       domString +=   `</div>` 
    }
    printToDom(domString);
    sortEvents();
  };
  
 
export {setCharacters, detailsBuilder,sortPeople, sortEvents, getpetz}
