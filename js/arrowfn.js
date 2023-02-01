//function expression

const calcAge2 = function(birthYear){
    return 2023-birthYear;
}
const age21=calcAge2(2000)
console.log(age21)                 //output 23 



//arrow function

const calAge1 = birthYear => 2023-birthYear;
const age=calAge1(2000)
console.log(age);

//1 parammetr and more lines in arrow function

const yearUntolRetire = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement
}

console.log(yearUntolRetire(2000))       //42 years left

// multiple parameters

const retireYear = (birthYear, firstName) => {
    const age1 = 2023 - birthYear;
    const retire = 65- age1;
    return `${firstName} retires in ${retire} years`
}

console.log(retireYear(2000, 'Anju'));