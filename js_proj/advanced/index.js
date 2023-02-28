// console.log('one')

// document.getElementById('button').onclick= myFunction;  //call back function
// function myFunction(arg){
//     console.log(arg);
// }

// myFunction(10)
// console.log("two")

//we have 2 types of call back functions. asynchronous and synchronous
//above is asynchronous--since 2 threads are there
//one main thread is for 2 consoles and other for the  function

//synchronous--- 

const fn=(a,b) => {
    return a+b;
}

const add =fn(3,2)
console.log(add)

//arrow fn
//creating a object using arrow function 
const fn2 =() => {
    return{
        a:1,
        b:2
    };
}

const val= fn2()
console.log(val)

const obj = {
    a:100,
    b:200,
    myFun:function(){
        return this.a + this.b;   // to acess an elemnt from outside use this . (a and b will be undefined inside this object)
    
    
    }
}

console.log(obj.myFun())

const myobj= {
    a:1,
    b:2,
    c:function(){
        console.log("hello") //output will be hello
        //console.log(this)   this will print entire object

                                //if we use this inside an objct and try to ccess that using the function it will rint entire object
        //
    }
}
console.log(myobj)

var aa=myobj.c;  //it will print window object from this

aa();


//call by value & call by ref


function one(){
    var a=100
    two(a)
    console.log(a)        //output   100
}
function two(a){
    a =a+1
    console.log(a) //two 101
}
one()

//first output will be two 101 and next we will get one 100
//as value is stored as 100 in stack

//if we add object in case of above question


function onee(){
    var a = {
        value: 100
    };
    twoo(a);
    console.log('one', a.value);  //output one 101
}

function twoo(a){
    a.value = a.value +1;
    console.log('two',a.value)  //output two 101
}
one();

//in case of objects for both oneee and twoo output is 101. and for array also its same 

//value of second function reflected in first function
//becuase in the case  here in heap memory oly object stored and in stack instead of as value we will give as ref to heap
//once twoo completed it will be removed from stack but it will change as value in heap as well so when we call again, as ref pointing to 101 instead of 100


function one(){
    var a ={
        value: 100,
    };
    two(a);
    console.log('one, a.value');
}

function two(a){
    a={
        value:400
    }
    console.log('two', a.value);
}
one();

//in above case output is 400 then 100
//here for a a new ref created in heap from two and that ref used while acessing function two
//and on completion of that function ref for that will be removed


//for objects and arrays its known as call by reference
//and for other data types its known as call by value

