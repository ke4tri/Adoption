import { printToDom } from "../helpers/util.js";


let pets = [];

const setCharacters = (newArray) => {
    pets = newArray;
    console.log('this did it')
  };

export {setCharacters}
