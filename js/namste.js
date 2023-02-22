
function x()
var i =1;

setTimeout(function() {
    console.log(i)
}, 1000);


x()

//prints 1 after 1 seconds
//settimeout takes a call back function attach the time to it and once it expands the time it will call the function and execute the content inside that 

//timeout function
//timeout function doesnt guarrennty it will be called exactly after the specified time


console.log("start")

setTimeout(function cb(){
    console.log("callback");
}, 5000);

console.log("end");
//let millions of code  //and it takes 10 s


// in this case cb will wait for near 10 s instaed of 5s because of i million code after the last console 
//for timeout the call stack should be empty 



console.log("start")

setTimeout(function cb(){
    console.log("callback");
}, 0);

console.log("end");


//output will be  start,end and then callback
//eventhough the  time is o it willl wait or the  call stack to become empty