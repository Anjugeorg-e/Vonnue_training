// const toggle=document.querySelectorAll('.fa-btn')
// console.log("hai")
// toggle.forEach(toggle => {
//     toggle.addEventListener('click' ,() => {
//         toggle.parentNode.classList.toggle('show')
//     })
// }) 
// console.log("hell")

const toggles=document.querySelector('.fa-show')
const toggleBtn = document.querySelector('.fa-btn')
toggleBtn.addEventListner('click' ,() => {
   toggles.classList.toggle('show')
   toggles.classList.add('show')
})


// toggleBtn.forEach(toggleBtn => {
//    toggleBtn.addEventListener('click', ()=>{
//       toggles.classList.toggle('show')
//    })
   
//    const chevron = documnet.querySelector('.fas')
//    chevron.addEventListener('click',()=>{
//       chevron.classList.add('rotate')
//    })
   
// });