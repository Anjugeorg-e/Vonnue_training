const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10  // 10 rows of image

for(let i=0; i< rows *3; i++){  //3 images per row

    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}
//console.log(getRandomSize())
function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}
//console.log (getRandomNr())

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}