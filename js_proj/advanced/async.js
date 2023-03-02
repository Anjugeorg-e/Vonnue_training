// async is done while declaring a function
//await -is while calling a function

// function getValue(){
//     return 12;
// }

// const result = getValue();
// console.log(result);  //output is 12

//to make a function as async add async keyword infrnt of function declaration

// async function getValue(){
//     return 12;
// }

// const result = getValue();
//                   // console.log(result)  //output will be a promise in case of async function so we need to resolve that
// result.then((data)=>{
//     console.log(data)  //this will resolve the promise and we will get 12
// })

//////////////////////////////////////

//async function makes anything written inside it into a promise


// async function getValue(){
//     return fetch('https://jsonplaceholder.typicode.com/todos/1'); //if its a promise instaed of normal value
// }

// const result = getValue();
// result.then((data) => {
//     console.log(data)  //the value resolved by promise will come here
//     //so we will get the network response
// })

////////////////////


//we will get strated , ended and finally the response in the below case as output
// console.log('started');
// getValue()
// console.log('Ended');

// function getValue(){
//  fetch('https://jsonplaceholder.typicode.com/todos/1') //if its a promise instaed of normal value
//   .then((data) => {
//     console.log(data)  //the value resolved by promise will come here
//     //so we will get the network response
// });
// }

///////////////

// console.log('started');
// getValue()
// console.log('Ended');

// async function getValue(){
// // const data= fetch('https://jsonplaceholder.typicode.com/todos/1') //if you need data like this we neeed to wait for long time which will make  block time .s so we are giving as callabck in promise---then ,
// const data= await fetch('https://jsonplaceholder.typicode.com/todos/1')//for making the above line working add await 
// //for adding await make the function as async
// console.log(data)
// return data;

// }
//in the above case output will be started, ended and response

//---here initially it prints started
//goes to getvalue function---and puts a marker inside function ,prints a promise and go back to ended 
//after getting response from server it s also printed.

////////////

// console.log('started');
// getValue()
// console.log('Ended');

// async function getValue(){
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//             //   .then((data) => {
//             //     return data.json();
//             //   })
//             //   .then((data) => {
//             //     console.log(data) // we will get userid details in this case .instaed of this we can use below code
//             //   });

// const data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
// const jsonData= await data.json();
// console.log(jsonData)
// return jsonData;

// }


////////////////


//handling errors in async

    // console.log('started');
    // var aa= getValue()

    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch(() => {
    //     console.log('handled') //we will get started ended,error and handled as output
    //     return{}
    //   })
    // console.log('Ended');

    // async function getValue(){

    // const data= await fetch('https://jsonplacehoolder.typicode.com/todos/1')
    // const jsonData= await data.json();
    // console.log(jsonData) //we cant write catch blocks inside async function .
    // return jsonData;
    // }



/////////////


console.log('started');
var aa= getValue()

  .then((data) => {
    console.log(data)
  })

console.log('Ended');

async function getValue(){
try{ //instaed of top way use this way also 

    const data= await fetch('https://jsonplacehoolder.typicode.com/todos/1')
    const jsonData= await data.json();
    console.log(jsonData) //we cant write catch blocks inside async function .
    return jsonData;
}catch(e){
    console.log('handled');
    return {}
}
}