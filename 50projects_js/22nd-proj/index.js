const canvas=document.getElementById('canvas');
const increaseBtn=document.getElementById('increase');
const decraseBtn=document.getElementById('decrease');
const clearEl=document.getElementById('clear');
const colorEl=document.getElementById('color');
const sizeEl=document.getElementById('size');

const ctx=canvas.getContext('2d');

let size=10;
let color='black';
//let isPressed = false;
let x;
let y;


canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;  //horizontal coordinate for e object
    y = e.offsetY;  //vertical coordinate for e

    //console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;  //horizontal coordinate for e object
    y = undefined;  //vertical coordinate for e

    //console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove',(e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

       
        drawCircle(x2, y2)
        drawLine(x,y, x2, y2)

        x=x2 //to make in same point
        y=y2 //to make same point
    }
})

//x,y are distance along x axis and height rom top

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.fillStyle=color;
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size *2  //to make same with circle radius
    ctx.stroke()

}

function updateSizeOnScreen(){
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})

decraseBtn.addEventListener('click', () => {
    size -=5
    if(size <5){
        size=5
    }
    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
//drawCircle(100,200)
//drawLine(200,200,500,200)