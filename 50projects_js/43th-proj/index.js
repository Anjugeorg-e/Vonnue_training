const ratings = document.querySelectorAll('.rating')
const ratingscontainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'satisfied'


ratingscontainer.addEventListener('click', (e) => {
    //console.log('click')
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML 
        //console.log(selectedRating)
      //  console.log(e.target)
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class ="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve your customer support</p>
    `
})


function removeActive(){
    for(let i =0; i<ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}