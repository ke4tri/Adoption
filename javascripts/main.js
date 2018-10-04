import {getPets} from './data/petData.js';
import {detailsBuilder} from '../javascripts/components/petComponents.js'



const initializeApp = () => {
    console.log('initializeApp')
    getPets();
    
};

initializeApp();
