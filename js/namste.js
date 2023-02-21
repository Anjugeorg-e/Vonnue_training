
function x()
var i =1;

setTimeout(function() {
    console.log(i)
}, 1000);


x()

//prints 1 after 1 seconds
//settimeout takes a call back function attach the time to it and once it expands the time it will call the function and execute the content inside that 