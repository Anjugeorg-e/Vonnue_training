//in template literals${we cant use if stmnts}
//instead of  if stmnt use ternary

const age=23;

age >= 18 ? console.log("i like wine") : console.log("i like water");

//otherway

const ages=19;
const drink=age>=18 ? 'wine' : 'water'
console.log(drink)


//its possible to add a ternary operator in a template litera

console.log(`i like ${age>=18 ? 'wine' : 'water'}`);



//coding challenge

let bill=275;
let tip1=bill*(15/100)
let tip2=bill*(20/100)

let tip=bill>=50 && bill<=300 ?  tip1 : tip2

let total=tip+bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)

