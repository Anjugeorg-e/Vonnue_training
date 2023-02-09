const testimonialContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials =[
{
    name:'Miyah Myles',
    position:'Marketing',
    photo:"https://randomuser.me/api/portraits/women/46.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fugiat! Temporibus repellendus numquam dicta nesciunt recusandae quia molestias adipisci provident!",

},
{
    name:'Miya',
    position:'Finance',
    photo:"https://randomuser.me/api/portraits/women/65.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fugiat! Temporibus repellendus numquam dicta nesciunt recusandae quia molestias adipisci provident!",

},
{
    name:'Myles',
    position:'Accounting',
    photo:"https://randomuser.me/api/portraits/women/58.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fugiat! Temporibus repellendus numquam dicta nesciunt recusandae quia molestias adipisci provident!",

},


]

let idx = 1;
function updateTestimonial(){
   const{ name, position, photo, text} = testimonials[idx]
    //console.log(testimonials[idx])
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    idx++

    if(idx > testimonials.length - 1){
        idx =0

    }
}

setInterval(updateTestimonial, 10000)
