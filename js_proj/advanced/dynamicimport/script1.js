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

//new code

                    // import {createButton} from './script.js';

                    // createButton('Feature 1', () => {
                    // alert('feature 1')
                    // });
                    // createButton('Feature 2', () => {
                    //     createButton('start Disco', changeBg)
                    //     createButton('Stop Disco',stopChangingBg)
                    // });


                    // let isGreen = true;
                    // let handle = null;
                    // function changeBg(){
                    //     if(!handle){

                    //         handle= setInterval(() => {
                    //             document.body.style.background = isGreen ? 'green' : 'blue' ;
                    //             isGreen = !isGreen
                    //         }, 500);
                    //     }
                    //     }

                    // function stopChangingBg(){
                    //     if(handle){
                    //         clearInterval(handle)
                    //         handle=null;
                    //         document.body.style.background =' none'
                    //     }
                    // }

//in this case this file is already loaded before we are planning to click the buttons
//so delayed page load occurs
//and unnecessary server load also occurs


import { createButton } from './script.js';

createButton('Feature 1', () => {
    alert('feature 1');
});

createButton('feature 2', async() => {
    // import('./feature2.js')
    //   .then((obj) => {
          
    //             createButton('start   Disco', obj.changeBg);
    //             createButton('stop Disco', obj.stopChangingBg)

    const obj = await  import('./feature2.js');
        
              createButton('start   Disco', obj.changeBg);
              createButton('stop Disco', obj.stopChangingBg)
      });