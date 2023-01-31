//truthy falsy values
//falsy values are not false but when we convert to boolean it will become false
//falsy values -.impt - 0 , '' , nan , null, undefined
/*
console.log(Boolean(0));    //false
console.log(Boolean(''));  //false
console.log(Boolean("12"));   //true
console.log(Boolean({})) //true

*/

/*
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

*/

/*
let dolphins;

let dolphinSum=(96+108+89)
let dolphinAvg=(dolphinSum)/3;

console.log(dolphinSum);

let kolas;
let kolasSum=(88+91+110)
let kolasAvg=(kolasSum)/3;
console.log(kolasSum);

if(dolphinAvg>kolasAvg){
    console.log("dolphin wins")
}
else if (dolphinAvg === kolasAvg){
    console.log("both wins")
}
else{
    console.log("kolas wins");
}

  

let minScore=100;
if(dolphinAvg>kolasAvg && dolphinAvg>= 100){
    console.log("dolphin wins in match")
}
else if(kolasAvg>dolphinAvg && kolasAvg >=100){
    console.log("kolaswins")

}

if(kolasAvg==dolphinAvg && kolasAvg>=100 && dolphinAvg>=100){
    console.log("both team wins")
}
else{
    console.log("no team wins")
}
*/

let day='thursday';

if(day === 'monday'){
    console.log("today is monday")
}
else if(day === 'tuesday'){
    console.log("today is monday")
}
else if(day === 'wednesday' || day ==='thursday'){
    console.log("today is the day")
}
else if(day === 'friday' || day ==='saturday'){
    console.log("today is weekday")
}
else if(day === 'sunday'){
    console.log("sunday")

}
else{
    console.log("not a avlid day")
}
