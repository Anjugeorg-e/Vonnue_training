//document.getElementById("count-el").innerText=5;

/*let bonuspoints=50;
bonuspoints=bonuspoints+50;

console.log(bonuspoints);

bonuspoints=bonuspoints-75;
console.log(bonuspoints);

bonuspoints=bonuspoints+50;
console.log(bonuspoints); */

/*function increment(){
    console.log("the button clicked");
}*/
/*function count(){
console.log(5);
console.log(4);
console.log(3);
console.log(2);}

count();*//*
function first(){
    console.log(42);
}
first();*/
/*
let lap1=34;
let lap2=33;
let lap3=36;
function totaltime(){
    console.log(lap1+lap2+lap3)
}*/

//totaltime();

/*
//check blockscope of let
let lap1=34;
let lap2=33;
let lap3=36;
function totallaptime()
{
    let total=lap1+lap2+lap3;
    console.log(total);
}
totallaptime();*/
/*
let lapscompleted = 0;
function laps(){
    for(let i=0;i<3;i++){
        lapscompleted=lapscompleted+1;
    }
    console.log(lapscompleted);
}
laps();
*/

let saveEl= document.getElementById("save-el")
let countEl= document.getElementById("count-el")
console.log(countEl)
let count =0;


console.log(saveEl)

function increment(){
    count +=1;
    countEl.innerText=count;
    
} 
function save(){

    let countStr= count + " - "
    console.log(count)
    saveEl.textContent += countStr;
    countEl.textContent=0;
    count =0

    /*saveEl.innerText += countStr; ---------after count the space wont come so use textcontent*/
}


/*
let username="per"
let message="You have three new notification";
let messagetouser= message + ", " + username;
console.log(messagetouser);

let name="Anju";
let greeting="Hi , my name is :" 

let myGreeting=greeting + " " + name;
console.log(myGreeting);

/*
let welcomeEl=document.getElementById("welcome-el")
let name="Anju"
let greeting="Welcome back!"
welcomeEl.innerText= greeting + name;

welcomeEl.innerText=welcomeEl.innerText + ".." */

