//primitive and non primitive 

//primitive--->string,number,bigint,boolean,undefined,symbol,null
//non-primitive--->object,map,array,function

//in case of primitives value will be compared
//in case of non primitives reference will be compared

//mutable-->changing value of a variable
var a={
    name: 'code malayalam'
};
var b =a;  //since a is an object .reference of b will be copied to a .not the content inside a '

b.name = 'code malayalm 2.0' //value inside the ref will be changed

console.log('a=', a) //output codemalayalm2.0
console.log('b=',b)  //output codemalayalm2.0

//----------------------------------------//
 

var c=10;

var d=c;

d=d+1;
console.log(c)
console.log(d)