const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 500;      //total number of small squares

for(let i =0; i<SQUARES; i++){
    const square = document.createElement('div'); //creating a div elemnt using createelemnt method
    //we can create any dom element using create eleemnt method
    square.classList.add('square')

    square.addEventListener('mouseover',() => setColor(square))    //setcolor once mouse over

    square.addEventListener('mouseout',() => removeColor(square))  //remocve once mouseout

    container.appendChild(square)//to insert the squares to container  use appenchild
}

function setColor(element){
    const color = getRandomColor()
    //console.log(color)
   // console.log(element)
   element.style.background = color
   element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
   // console.log(123)

   element.style.background = '#1d1d1d';  // back to css old background color
   element.style.boxShadow = '0 0 2px #000'  // back to css old boxshadow
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
 }

