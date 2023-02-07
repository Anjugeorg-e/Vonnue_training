const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () =>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){
        return
    }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('password copied to clipboard!')
})
generateEl.addEventListener('click', () => {
    const length = + lengthEl.value       //+ will create a string if put infront of a string
    //console.log(length)

    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNUmber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNUmber, hasSymbol, length)
    //console.log(hasLower, hasUpper, hasNUmber, hasSymbol)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol;
    //console.log(typesCount)

    //const typesArr = [{lower},{upper},{number},{symbol}]

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])  //to get the false values only
    //console.log(typesArr)

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i+= typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
            //console.log(funcName)
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword;

}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) //lower case a -97 // to generate letters from a to z randomly
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) //upper case a  65 // to generate letters from a to z randomly
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48) //0 is 48 // to generate 0 to 9 randomly
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*{}[]=<>/,.' //special characters
    //return symbols[1]      //to get special char at pos  1
    return symbols[Math.floor(Math.random() * symbols.length)]
}


//console.log(getRandomSymbol())