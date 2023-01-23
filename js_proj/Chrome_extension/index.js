/*function savelead(){
    console.log("Button Clicked!")
}*/

let myLeads=[]  //can be reassigned the values or can be redeclared
const inputEl=document.getElementById("input-el")  //cannot reassign value.always same
let inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

localStorage.setItem("myLeads", "www.example.com")
let name=localStorage.getItem("myLeads")
localStorage.clear()

//console.log(ulEl)


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    //myLeads.push("www.awesomelead.com")
   // console.log(myLeads)
   inputEl.value= ""
   renderLeads()
})


function renderLeads(){
let listItems=""
for(let i=0; i<myLeads.length; i++){
   // ulEl.textContent+=myLeads[i] + " "
   //ulEl.textcontent += "<li>" + myLeads[i] + " </li>" /innertext wont give li items in dot format instead it will give <li>name format so innerhtml use nstaed of this
  //ulEl.innerHTML+= "<li>" + myLeads[i] + "</li"  // to make li working crrctly. to getlisted items  
    
  //listItems += "<li><a href=' " + myLeads[i] + "' >"  + myLeads[i] + "</a></li>"

  //listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + "</li>"
 //template strings instead of above line

listItems += ` 
<li><a target='_blank' href='${myLeads[i]}'>
   ${myLeads[i]} 
   </a>
   </li>

`
}



ulEl.innerHTML=listItems //dom comes with cost . soo makinhg innerhtml outside loop is the best practics than the above one inside a loop 

}
/*const container=document.getElementById("container") // id in html forgot to add a button try this n js to add a button
container.innerHTML="<button> Buy! </button"
// container.innerHTML="<button onclick='buy()'> buy!</button>"
//function buy(){
    //container.innerHTML="<p>Thank you for buying!</p>" ---it will clear the button and will keep only the paragraph
     container.innerHTML +="<p>Thank you for buying!</p>" ---->it will keep both box button and the para in line by line 
}


*/

