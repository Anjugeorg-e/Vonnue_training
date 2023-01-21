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

let firstcard= 10
let secondcard=11
let cards=[firstcard,secondcard]
let sum= firstcard + secondcard
let hasblackjack=false
let isAlive=true
let message="";
let messageEl= document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
/*
let sumEl = document.querySelector("body")
let sumEl = document.querySelector("#sum-el")*/

let sumEl=document.getElementById("sum-el")

/*let sumEl = document.querySelector(#sum-el) ----instaed of get elementby id using query selector -->here in html it was  a id so used #. if it was a class use .  */
console.log(messageEl)

function startgame(){
    rendergame()
}


function rendergame(){

    cardsEl.textContent="Cards:" + cards[0] + " " + cards[1]
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
    console.log("Drawing a new card from the deck")

    let card=8;
    sum+=card
    cards.push()
    rendergame()
}
