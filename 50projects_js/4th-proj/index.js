/*
const search=document.querySelector('.search')
const input=document.querySelector('.input')
const btn=document.querySelector('.btn')

btn.addEventListener('click', ()=> {
    search.classList.toggle('active')
    input.focus()
})
*/



const search=document.querySelector('.search')
const btn=document.querySelector('.btn')
const input=document.querySelector('.input')

btn.addEventListener('click',() =>{
    search.classList.toggle('active'); /toggles the active session btn the search class elemnets 
    input.focus(); //adds a focus line in input area
})