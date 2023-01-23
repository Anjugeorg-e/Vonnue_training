/*let firstcard=15;
let secondCard=15;

let sum=firstcard + secondCard;
console.log(sum);

if(sum<21){
    console.log("safe!")
}
else if(sum==21){
    console.log("Win..")
}
else{
    console.log("Fail(*_*)")
}
*/
/*
let age=22
if(age<21){
    console.log("You cannot enter the club!..")
}
else{
    console.log("WElcome..")
}
*//*
let age=100
if(age<100){
    console.log("Not eligible");
}
else if(age===100){
    console.log("Here is your birthday card")

}

else{
    console.log("Not eligible, you have already gotten one")
}

*/

//let firstcard= getRandomCard()
//let secondcard=getRandomCard()
//let cards=[firstcard,secondcard]

let cards= []
let sum = 0
//let sum= firstcard + secondcard
let hasblackjack=false
let isAlive=true
let message="";
let messageEl= document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")

let player={
    name:"Anju",
    chips: 145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.chips

console.log()

function getRandomCard(){
    let randomnumber= Math.floor(Math.random()*13) + 1  //1to 13 cards
    if(randomnumber>10){
        return 10
    }
    else if (randomnumber == 1){
        return 11
    }
    else{
        return randomnumber
    }
}
/*
let sumEl = document.querySelector("body")
let sumEl = document.querySelector("#sum-el")*/

let sumEl=document.getElementById("sum-el")

/*let sumEl = document.querySelector(#sum-el) ----instaed of get elementby id using query selector -->here in html it was  a id so used #. if it was a class use .  */
console.log(messageEl)
function startgame(){
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard, secondcard]
    sum=firstcard + secondcard

    rendergame()
}


function rendergame(){

   // cardsEl.textContent="Cards:" + cards[0] + " " + cards[1]

    cardsEl.textContent="cards:"
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent="Sum:" + sum

    if(sum <= 20){
        message="Do you want to draw a new card!"  
    }
    else if(sum===21){
        message="Wohoo! you have got Blackjack"
        hasblackjack=true
    }
    else{
        message="you are out oof the game"
         isAlive=false
    }
    messageEl.textContent=message
} 

function newcard(){

    if(isAlive === true && hasblackjack === false){

    }
    //console.log("Drawing a new card from the deck")
    let card=getRandomCard()
   // let card=8;
    sum+=card
    cards.push()
    rendergame()
}

/*
let cardss=[7,3,9]
for(let i=0;i<cardss.length;i+=1){
    console.log(cards[i]);
}
*/