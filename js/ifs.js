/*function trueorfalse(wasThatTrue){
    if(wasThatTrue){
        return "yes, it was true";
    }

    else{
        return "no,it was not true";
    }

}
console.log(trueorfalse(true));

//comparison ops

function testEqual(val)
{
    if(val ==  12){
        return "value is true";
    }
    else{
        return "value is false";
    }
}

//testEqual(10);
console.log(testEqual(10));


//strict equal operator
function fun(value)
{
    if (value === 3)
    {
        return "its false";
    }
    else{
        return"  its true";
    }
}
fun(3);
console.log(fun());

*/
/*
function comparison(a,b){
    if(a===b){
        return "true;"
    }
    return "false";
}

console.log(comparison(3, '3'));

//inequality ops

function inequality(val){
    if(val!=5){
        return "false";
    }
    else{
        return "true";
    }
}

console.log(inequality(9));


function strictin(value){
    if(value !== 10){
        return "true";

    }
        return "false";
}

console.log(strictin(9));

//greater than

function myfunction(val){
    if(val> 10){
        return "greater than 10";
    }
    return "less than 10" ;
}
console.log(myfunction(9));

//logical and

function logicalAnd(val){
    if(val >=10 && val <=25){
        return "below 25";
    }
        return "no";
}

console.log(logicalAnd(5));

//logical or

function logicalor(val){
    if(val <10 || val<20){
        return "true";
    }
    return "false";
}
console.lo/*
function myfun(num){
if(num<5){
    return "tiny"
}
else if(num<10){
    return "small"
}
else if(num<15){
    return "medium"
}
else if(num<20){
    return "large"
}
else{
    return "huge"
}
}

console.log(myfun(5));*/
/*

function caseswitch(val)
{
    var answer="";
    switch(val) 
    {
        case 1:
            answer= "alpha"
            break;
        case 2:    
            answer= "beta"
            break;
        case 3:
            answer= "gamma"
            break;
        default:
            answer="NO MATCH";
            break;    
        }
        return answer;
}
console.log(caseswitch(8));
*/
/*
function caseswitch(val)
{
    var answer="";
    switch(val) 
    {
        case 1:
        case 2:
        case 3:    
            answer= "alpha"
            break;
        case 4:
        case 5:
        case 6:            
            answer= "beta"
            break;
        case 7:
        case 8:
        case 9:        
            answer= "gamma"
            break;
        default:
            answer="NO MATCH";
            break;    
        }
        return answer;
}
console.log(caseswitch(10));


function istrue(a,b){
    return a<b;
}
console.log(istrue(8,4));



var mydog={
    "name":"anju", 
    "legs":3,
    "tails":2,
    "friends":[]
}
var hvalue=mydog.name;
console.log(hvalue);


var mydg={
    "name ls":"anju", 
    "legs":3,
    "tails":2,
    "friends":[]
}
var hvalue=mydg["name ls"];
console.log(hvalue);

var myg={
    15:"anju", 
    "legs":3,
    "tails":2,
    "friends":[]
}
var hs = 15;
var hvalue=myg[hs];
console.log(hvalue);

var mydog={
    "name":"anju", 
    "legs":3,
    "tails":2,
    "friends":[]
}
mydog.name="geo";
console.log(mydog);

var mydog={
    "name":"anju", 
    "legs":3,
    "tails":2,
    "friends":[]
}
delete mydog.name;
console.log(mydog);

*/
/*
var myArray=[];

var i=0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray);



var myarr=[];
for(var i=1;i<5;i++)
{
    myarr.push(i);
}
console.log(myarr);

var mya=[];
for(var j=1;j<10;j+=2){
     mya.push(j);
}
console.log(mya);

var mya=[];
for(var j=0;j<10;j+=2){
     mya.push(j);
}
console.log(mya);


var mya=[];
for(var j=10;j>0;j-=2){
     mya.push(j);
}
console.log(mya);


var mya=[2,3,4,5,6,7,8];
var total=0;
for(var i=0;i<mya.length;i++){
    total+=mya[i];
}
console.log(total);

var myarray=[];
var i=10;

do{
    myarray.push(i);
    i++;
}while (i<5)

console.log(i, myarray);

//random fraction between 0 to 1 

function randomfraction(){
    return Math.random();
}

//random whole number
console.log(randomfraction());

function randomwholenumber(){
    return Math.floor(Math.random() * 10);
}
console.log(randomwholenumber());*/
/*
function randomrange(mymin,mymax){
    return Math.floor(Math.random()*(mymax-mymin)+1) +mymin;
}

var random=randomrange(5,10);
console.log(random);

//parseint
function toInt(str){
    return parseInt(str);
}
var val=toInt("36");
console.log(val);
*/

/*
//raddix

function toInt(str){
    return parseInt(str,2);
}
var val=toInt("10012");
console.log(val);*/

//ternary
/*
function tern(a,b){
    return a===b ? true : false;
}
var c=tern(3,3)
console.log(c);

function ternar(a){
    return a>0 ? "a is positive" : a<0 ? "a is negative" : "zero";
}
console.log(ternar(0));*/

//let and var 

function check(){
    var i="functionscope";
    if(true){
        var i="blockscope";
        console.log("block scope:",i);
    }
    console.log("func scope:",i);
}

console.log(check());

var magic = () => new Date();

//arrow for string concat

var mycontact=(arr1,arr2) =>arr1.concat(arr2);
console.log(mycontact([1,2],[4,3,5]));


const increment= (function(){
    return function increment(number, value=1){

    
      return number+value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

//rest ops  
const sum=(function(){
    return function sum(...args){
        return args.reduce((a, b) => a+b,0);
    };
})();
console.log(sum(1,2));


//spread ops

const arr1=['jan', 'feb' , 'march'];
let arr2;
(function(){
   arr2 = [...arr1];//------copy of arr1 potato line wont chnge anything
   // arr2=arr1;
    arr1[0]='potato';

})();
console.log(arr2);

//destructing assignment using rest

const source = [1,2,3,4,5,6,7,8,9];
function removeFirstTwo(list){
    const [, , ...arr]= list;  //  remove first 2 elements and keep all rest
    return arr;
}
const arr=removeFirstTwo(source);
console.log(arr);
console.log(source);

//simple fields
const createPerson=(name, age, gender) => ({name, age, gender});
console.log(createPerson("zodiac" , 56 , "male"));



