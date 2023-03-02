// console.log('started');

// const a= getVal1();
// const b=getVal2();

// const result = processValues(a, b);
// console.log(result);

// console.log('ended');

// function getVal1(){
//     return 12;
// }
// function getVal2(){
//     return 22;
// }

// function processValues(a, b){
//     return a+b;
// }

//getting errors in code due to some mistakes is known as throwing error

// console.log('started');

// let c
// //the function which probably throws an error we will keep inside try block

// try{ 
//     console.log("try")
//     c=getVal1();  //if it throws error we will use catch.
//     //if getval1 throws any error in anywhere inside code it will come to catch block
// }catch(e){
//     console.log("catch")
//   c=0
// }

// let d=getVal2();

// const results = processValues(c,d);
// console.log(results);

// console.log('ended');

// function getVal1(){
//     console.log('inside val1')
//     var obj=undefined;
//     return obj.value; //we will get error since undefined 
// }
// function getVal2(){
//     return 22;
// }

// function processValues(c, d){
//     return c+d;
// }

//for getval1 we got error so we returned try catch block 
//we will enter to try block and then it will go to the entire code and for that function if any error comes
//it will do catch 

////////======================================/////////////////////


// console.log('started');

// let a, b,result;

// try{
//     console.log('on try')
//     a=getVal1();
//     b=getVal2();
//     result = processValues(a, b);
// }catch(e){
//     console.log('on catch');  //we will get  result as 0
//     result = 0;
// }

// console.log(result);
// console.log('ended');

// function getVal1(){
//     console.log('inside val1')
//     return 22;
// }
// function getVal2(){
//     console.log('inside val2')
//     return 22;
// }
// function processValues(a, b){
//     dhhdjh();
//     return a+b;
// }

//in case you need to add try catch for all code blocks do in the top way

/////////////////////////////////


//finally
//after try and catch we will erite finally
//if u need to execute some codes in try Aand catch compulsory we can write that code inside finally 
//guranteed execution
//even if code has not entered into try or catch it will enter to finally


// console.log('started');

// let a, b,result;

// try{
//     console.log('on try')
//     a=getVal1();
//     b=getVal2();
//     result = processValues(a, b);
// }catch(e){
//     console.log('on catch');  //we will get  result as 0
//     result = 0;
// }finally{
//     console.log('in finally')
// }

// console.log(result);
// console.log('ended');

// function getVal1(){
//     console.log('inside val1')
//     return 22;
// }
// function getVal2(){
//     console.log('inside val2')
//     return 22;
// }
// function processValues(a, b){
//     // dhhdjh();
//     return a+b;
// }

//even there is no error in code it will enter to finally
//if catch throws any errors also it will enter to finally reult,ended data will not be printed


///////////////////////

//throw
//we making errors inside code


console.log('started');

let a, b,result;

try{
    console.log('on try')
    a=getVal1();
    b=getVal2();
    result = processValues(a, b);
}catch(e){
    console.log('on catch', e);  //on catch ente error
    result = 0;    //we will get  result as 0
}finally{
    console.log('in finally')
}

console.log(result);
console.log('ended');

function getVal1(){
    console.log('inside val1')
    return 22;
}
function getVal2(){
    console.log('inside val2')
    throw 'Ente error'  //will get error like uncaught ente error if no catch
    return 22;
}
function processValues(a, b){
    // dhhdjh();
    return a+b;
}