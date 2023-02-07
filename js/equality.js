const age=18;
if(age === 18)  // wil not perform coersion in ===
{
    console.log("you are an adult!");
}

// ==  will do type coersion
/*
const favourite= prompt("whats your favourite?"); // will show as a alert box
console.log(favourite);
console.log(typeof(favourite));


const favourites= Number(prompt("whats your favourite?")); // will show as a alert box
console.log(favourites);
console.log(typeof(favourites));
if(favourites === 23){
console.log("cool!!!")}
else if(favourites === 22){
    console.log("hey!!!!")
}
else{
    console.log("number is not 23 or 22");
}

if(favourites !== 23){
    console.log("number is not 23");
}

*/
let age1=16;
if(age1 === 16 && age1=== 17){
    console.log("age is just a number")
}else{
    console.log("yezz")
}
