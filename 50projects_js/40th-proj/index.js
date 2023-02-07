const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))
function createBoxes(){
    for(let i=0; i<4; i++){ 
        for(let j =0; j<4; j++){
            const box = document.createElement('div')  // creates divs
            box.classList.add('box')   //we will get box inside div
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
            //console.log(box)
        }
}
}
createBoxes()