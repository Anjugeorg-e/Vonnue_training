//in asynchronous call back we will use promise to make the function neat 

// console.log('started');

// $.ajax({
//     type: 'GET',
//     url:'https://jsonplaceholder.typicode.com/todos/1',
//     success: (msg) => {
//         // console.log(msg);
//     },
//     error: (xhr, statusText) => {
//         console.log(statusText);
//     },
// });

// console.log('ended');
//output will be  started, ended and the API call

//Resolve-- After an API call ,calling a success callback is known as resolve
  // in this case we are calling success call back after the API call
  //calling the error call back is known as  Rejected






  /////////////////////////////////

  // console.log('started');

//   var pr= myFetch('https://jsonplaceholder.typicode.com/todos/1');
// pr.then((data) => {
    // console.log(data);
// });
//inside promise we have a then function and there we are giving the callback 

  // console.log('ended');

//here myfetch is a new function which use promise and returns an object of promise

  //////////////////////////////////////////

  //if in case we need error callback also use err in second position

  // console.log('started');

//   const pr= myFetch('https://jsonplaceholder.typicode.com/todos/1');
  
  // function buttonClick(){
  //   console.log('clicked');

  //   pr.then((data) => {
  //     console.log(data);
  // }, (err) => {
  //   console.log(err);
  // });
  // }
  // console.log('ended');

  //if data is off, any error comes that will use error callback

  //myfetch() is below code

  function myFetch(url){
    return new Promise((res, rej) => { //resolve and reject
        $.ajax({
            type: 'GET',
            url:url,
            success: function(msg) {
                res(msg);
            },
            error: function(xhr, statusText){
                rej(statusText);
            },
        });
    }); //promise has a constructor and which takes function as an argument
}


// console.log('Reuesting 1');
// const pr1 = myFetch('https://jsonplaceholder.typicode.com.todos/1');

// pr1.then((data) => {
//     console.log(data);

//     console.log('Requesting 2');
//     const pr1 = myFetch('https://jsonplaceholder.typicode.com/todos/2');

//     pr1.then((data) => {
//         console.log(data);

//         console.log('Requesting 3')
//         const pr1 = myFetch('https://jsonplaceholder.typicode.com/todos/3')

//         pr1.then((data) => {
//             console.log(data)
//         })
//     })
// })

//using chaining

// console.log('Reuesting 1');
// const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1');
// const pr2 = pr.then((data) => {
//   // console.log(data);
//   return 'hello';
// })

// // console.log('val', pr2)  //here then is returning a promise and using that feature chaining is working
// pr2.then((data) => {
//   console .log(data)
// })

//pr returns a promise pr2
//which is also having a data that can be rejected or resolved
//a promise (pr2) written by then (pr1) will be the return value of callback function written by pr2. 

///////////////


            // console.log('Reuesting 1');
            // const pr1 = myFetch('https://jsonplaceholder.typicode.com/todos/1');
            // const pr3 = pr1.then((data) => {
            //   console.log(data)
            //   return myFetch('https://jsonplaceholder.typicode.com/todos/2');
            // })

            // pr3.then((data) => {
            //   console .log(data)
            // })

//in the above case we will get pr3.then data as the content of passed todos/2


                      // console.log('Reuesting 1');
                      // myFetch('https://jsonplaceholder.typicode.com/todos/1')
                      // .then((data) => {
                      //   console.log(data)
                      //   console.log('Requesting 2')
                      // })
                      // const pr5 = pr4.then((data) => {
                      //   console.log(data)
                      //   return myFetch('https://jsonplaceholder.typicode.com/todos/2');
                      // })

                      // pr5.then((data) => {
                      //   console .log(data)
                      // })



////////////////

          // console.log('Reuesting 1');
          // myFetch('https://jsonplaceholder.typicode.com/todos/1')
          // .then((data) => {
          //   console.log(data)
          //   console.log('Requesting 2')
          //   return myFetch('https://jsonplaceholder.typicode.com/todos/2');
          // })
          // .then((data) => {
          //   console.log(data)
          //   console.log('Requesting 3')
          //   return myFetch('https://jsonplaceholder.typicode.com/todos/3')
          // })

          // .then((data) => {
          //   console .log(data)
          // })
/////////////////
//


console.log('Reuesting 1');
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
  // console.log(data)    ///it is returing a response
                        //data that we are getting after fetch is an object
                        //response we are getting is a json

  // console.log(data.json())     //promise   
  return data.json();               
  // console.log('Requesting 2')
  // return myFetch('https://jsonplaceholder.typicode.com/todos/2');
})
.then((data) => {
  console.log(data)
//   console.log('Requesting 3')
//   return myFetch('https://jsonplaceholder.typicode.com/todos/3')
})

// .then((data) => {
//   console .log(data)
// })

/////////////////////

// function getJson(url){  //function 
//   return fetch(url)
//   .then((data) => {
//     return data.json()
//   })
// }
// console.log('requesting 1');
// getJson('https://jsonplaceholder.typicode.com/todos/1')
// .then((data) => {
//   console.log(data)
// })

//other way of doing fetch using a getjson function
///////////////////////////

          // console.log('===Reuesting 1');
          //         getJson('https://jsonplaceholder.typicode.com/todonhhhs/1') //if we give any wrong link url there code inside then will not execute. and we will get error
          //           .then((data) => {
          //             console.log(data)
          //             console.log('===Requesting 2')
          //             return getJson('https://jsonplaceholder.typicode.com/todos/2');
          //           }, (err) => {
          //               console.log('Error:',err)
          //           })
          //           .then((data) => {
          //             console.log(data)
          //             console.log('===Requesting 3')
          //             return getJson('https://jsonplaceholder.typicode.com/todos/3')
          //           })

          //           .then((data) => {
          //             console .log(data)
          //           })

          //if any promise did the error handling other promise will think error already handled and no issue to enter to the remaing then clauses.so it makes us to write error handling to each then . so to avoid that we will use catch 

          
////////////////////

console.log('===Reuesting 1');
        getJson('https://jsonplaceholder.typicode.com/todos/1')   
          .then((data) => { //in thens callback once the promise is resolved only it will enter
            console.log(data)
            console.log('===Requesting 2')
            return getJson('https://jsonplaceholder.typicode.com/todos/2');
          })
           .catch((err) => {  //if promise rejected it will come to catch block
              console.log('Error: ',err)
          })
          .then((data) => {
            console.log(data)
            console.log('===Requesting 3')
            return getJson('https://jsonplaceholder.typicode.com/todos/3')
          })

          .then((data) => {
            console .log(data)
          })
          
          //output , requestibg 1 error  requesting3 final data
     //usually we are printing catch in bottom of the code
     //once we get the error no need to execute the remaining then statements
     
//util functions

// {
  //   name: 'Code Malayalam',  //let the user needs data from this cache
  // }
  
  function getJson(url)
  {
  let cache={name: 'Code Malayalam'} //

  if(cache){
    return converToPromise(cache) //we will get content from cache
    // return cache; //we will get an error 
  }
  return fetch(url) //if no content in cache this code will be executed 
    .then((data) => {
      return data.json();
    })
}

function converToPromise(data){
  return new Promise((res, rej) => {
    res(data);
  })
}

getJson('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => {
    console.log(data);
  })

  ///////////////////////////////////////////////////
//promise.all()

getJson('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
  console.log(data);
})
.catch((data) => {
  console.log(data);
})

//promise.all takes array of promises

Promise.all([
  getJson('https://jsonplaceholder.typicode.com/todos/1'),
  getJson('https://jsonplaceholder.typicode.com/todos/2'),
  getJson('https://jsonplaceholder.typicode.com/todos/3')
])
.then((data) => {
  console.log(data)
})

/////race

Promise.race([   //in case of race .then takes the first promise which is resolved
  getJson('https://jsonplaceholder.typicode.com/todos/1'),
  getJson('https://jsonplaceholder.typicode.com/todos/2'),
  getJson('https://jsonplaceholder.typicode.com/todos/3')
])
.then((data) => {
  console.log(data)
})