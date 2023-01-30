//functions
/*
function reusable()
{
    console.log("hai World!");
}

reusable();

*/

/*function myFunction(a,b){
    console.log(a+b);
}
     myFunction(2,3);  */

/*function myscope()
{
    var mynu=5;
    console.log(mynu);
}
myscope();

console.log(mynu);// we wil get an undefined error. hence its  trying to access outside of scope */

/*scope of variable inside a function
var dress="sweater";
function dresses()
{
    var dress="jeans";
    return dress;
}

console.log(dresses());
console.log(dress);  */


//return uses
/*
function sum(num){
    return num+5;
}
console.log(sum(5));  */

//if no return value inside a function result will be undefined
/*

var sum=5;
function under()
{
    sum=sum+3; // no output 
}
*/

//passing a returned value to a varaiable
/*
var changed=0;
function myfunction(num)
{
    return (num+10)/3;
}
changed=myfunction(6);
console.log(changed);


function nextInline(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("before:" + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("After:" + JSON.stringify(testArr));*/


let a='23' + '10' + 3;  // number to string
console.log(a)

let b='23' - '10' - 3;       //string to number
console.log(b)

let n = '1' +1 ;
n= n-1;
console.log(n);

let m='10' - '4' - '3' -2 + '5'; //op---15
console.log(m);





