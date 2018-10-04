import { printToDom } from "../helpers/util.js";

let pets = [];

const setCharacters = (newArray) => {
  console.log('setCharacters')  
  pets = newArray;
  };

  const detailsBuilder = () => {
    console.log('detailsbuilder')
    let domString = '';
     let i=0;
    for(i=0;i<pets.length;i++){
       domString +=   `<div class="card  mb-3" style="width: 18rem;">`
       domString +=   `<div class="card-body ">`
       domString +=       `<h3 class="card-link text-center">${pets[i]["name"]}</h3>`
       domString +=   `</div>`
       domString +=   `<img class="card-img-top" src="${pets[i]["imageUrl"]}">`
       domString +=   `<div class="card-body ">`
       domString +=       `<h5 class="card-title text-center">${pets[i]["color"]}</h5>`
       domString +=       `<p class="card-title text-center">${pets[i]["specialSkill"]}</p>`
       domString +=   `</div>`
       domString +=   `<div class="card-body ">`
       domString +=       `<h5 class="card-link text-center ">${pets[i]["type"]}</h5>`
       domString +=   `</div>`
       domString +=   `</div>` 
    }
    printToDom(domString);
  //   closeButtonEvent();
  };
  
 


export {setCharacters, detailsBuilder}
