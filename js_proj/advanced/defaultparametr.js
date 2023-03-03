// function average(a, b){
//     console.log(a, b);
//     const avg = (a+b)/2;

//     return avg
// }

// const av1=average(5,3)
// console.log(av1)


function average(a=0, b=0){  //default parameter if a or b's value is undefined  it will take 0
    console.log(a, b);
    const avg = (a+b)/2;

    return avg
}

const av1=average(5) //for a 5 will be taken and for b 0 will be taken
//if no value for both a nad b 0 will be taken for both of them 
console.log(av1)

/////////


function average1(a=getDefault(), b=0){   //value of a will be 100 and b will be 0
    console.log(a, b);
    const avg1 = (a+b)/2;
    return avg1
}

function getDefault(){
    return 100;
}

const av2=average1(3) 
console.log(av2)

/////////////////

function average2(a,b=a){ //assigning a to b here 
    //but we cant assign value of b into a 
    console.log(a,b);
    const avg2= (a+b) /2;
    return avg2;
}

function getDefault1(){
    return 100;
}

const av3= average2(10)
console.log(av3)