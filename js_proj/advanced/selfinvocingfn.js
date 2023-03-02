//scope of a variable--once a variable declared from where we can access it is known as  variable scoping
//
//local scope---once a variable declared inside a function it wont be accessibl efrom outside of function or from any other functions
//global scope--if varaiable declared outside of a function it will be accessible anywhere inside the program
//a global scoped varaiable will be accessible from any function or from any files


var number = 12;
function fn1(){
    console.log(number);
}

function fn2(){
    console.log(number)
}
fn1()
fn2()