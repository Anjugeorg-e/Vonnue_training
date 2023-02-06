const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const img = document.querySelectorAll('#imgs img')
//top command will create a nodelist with starting index of zero
let idx = 0
let interval = setInterval(run, 2000)

function run(){
    idx++

    changeImage()
}
function changeImage(){
    if(idx > img.length-1){ //nodelist so last index
        idx = 0
    }else if(idx < 0){
        idx = img.length-1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`  // to give sliding left effect to the image with 500 px(added -ve for left movemnet)
}


function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage() //even after putting this event image was automatically changing in 2s . so added aboev function
    resetInterval()

})

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage() //even after putting this event image was automatically changing in 2s . so added aboev function
    resetInterval()

})


