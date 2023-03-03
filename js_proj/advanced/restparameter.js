//rest parameter  --> syntax to accept parameters in a function


//array destructuring

// function test(){
//     const arr = [11, 33, 43, 22];
//     const [a,...rest]= arr;

//     console.log(a,rest) // 11 and 33 will be printed
// }

// test()



//----------------------//


function test(a,b, ...rest){
    console.log(a,b,rest) //output 11, 44, array containg remaing elemnts
}

// test(11, 44, 64, 22, 66) //fn arguments


//-----------------------------------------//

function test(...rest){
    console.log(rest) //output  array containg all elemnts
}

// test(11, 44, 64, 22, 66) //arguments

//-----------------------------------//

//rest operator helps to add any number of arguments as we wish  than passing as a parameter

function test1(...total){
    const a = total.reduce((sum, current) => sum + current)
    console.log(a)
}


// test1(11, 44, 64, 22, 66,21)

///////-------------------------------------//


function test2(...total){
    console.log(total)
    const b = total.reduce((sum, current) => sum + current)
    console.log(b)
}

const b=[11, 44, 64, 22, 66,21]
test2(...b)


/////////////////////////////////////////////////////



//parameter destructuring

function test3(a){
    const{
        name,
        age
    }=a;
    console.log(name, age)
}
const obj = {
    name:'Code Malayalam',
    age:21,
}

test3(obj)


///////////////////////////


//instead if top section we can write,

function test4({name1,age1}){  // instead age1 we can add name1 alone also for getting codemalyalm alone
    console.log(name1, age1)
}
const obj1 = {
    name1:'Code Malayalam',
    age1:21,
}

test4(obj1)
