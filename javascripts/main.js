import {getPets} from './data/petData.js';


const initializeApp = () => {
    getPets();
    console.log('This works')
};

initializeApp();
