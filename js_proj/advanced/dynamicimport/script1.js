// import { createButton } from "./script.js";

// createButton('Feature 1')
// createButton('Feature 2')



// import {createButton} from './script.js';

// createButton('Feature 1', () => {
//     console.log('clicked Feature 1')
// }
// );
// createButton('Feature 2', () => {
//     console.log('clicked feature 2')
// });


import {createButton} from './script.js';

createButton('Feature 1', () => {
   alert('feature 1')
});
createButton('Feature 2', () => {
    createButton('start Disco')
    createButton('Stop Disco')
});
