//truthy falsy values
//falsy values are not false but when we convert to boolean it will become false
//falsy values -.impt - 0 , '' , nan , null, undefined
/*
console.log(Boolean(0));    //false
console.log(Boolean(''));  //false
console.log(Boolean("12"));   //true
console.log(Boolean({})) //true

*/
const money=0;          //falsy value
if(money){
    console.log("use it wisely!");
}
else{
    console.log("sad...")
}

const mon=100;  //tru value
if(mon){
    console.log("use it safely!")
}else{
    console.log("use wisely")
}

let height;       // height is undefined so falsy value
if(height)[
    console.log("height is wrong")
]
else{
    console.log("height is undefined")
}


