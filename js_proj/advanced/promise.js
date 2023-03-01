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

console.log('Reuesting 1');
const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1');
const pr2 = pr.then((data) => {
  // console.log(data);
  return 'hello';
})

// console.log('val', pr2)  //here then is returning a promise and using that feature chaining is working
pr2.then((data) => {
  console .log(data)
})

//pr returns a promise pr2
//which is also having a data that can be rejected or resolved
//a promise (pr2) written by then (pr1) will be the return value of callback function written by pr2. 

///////////////


console.log('Reuesting 1');
const pr1 = myFetch('https://jsonplaceholder.typicode.com/todos/1');
const pr3 = pr1.then((data) => {
  console.log(data)
  return myFetch('https://jsonplaceholder.typicode.com/todos/2');
})

pr3.then((data) => {
  console .log(data)
})

//in the above case we will get pr3.then data as the content of passed todos/2


console.log('Reuesting 1');
myFetch('https://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
  console.log(data)
  console.log('Requesting 2')
})
const pr5 = pr4.then((data) => {
  console.log(data)
  return myFetch('https://jsonplaceholder.typicode.com/todos/2');
})

pr5.then((data) => {
  console .log(data)
})



////////////////