
const bg=document.querySelector('.background-im')
const loadText=document.querySelector('.blur_loading')

let load=0;
let interval=setInterval(blurring,30)

function blurring(){
    load++;

    if(load>99){
        clearInterval(interval)   
    }
    loadText.innerText= `${load}%`

    console.log(load)
   // loadText.innetText= `${load}%`
   loadText.style.opacity= scale(load, 0, 100, 1 ,0)
   bg.style.filter= `blur(${scale(load, 0, 100, 30 ,0)}px)`
}

//stack overflow
const scale=(num, in_min, in_max, out_min, out_max) =>{
   return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}