for(let i=1; i<=10; i++){
    console.log(`lifting challenge ${i}`)
}



const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
     ['MIchael', 'Peter', 'Steven']
];
const types = [];

for(let i=0; i<jonasArray.length; i++){
    console.log(jonasArray[i]);

    types.push(typeof jonasArray[i])
}

console.log(types)


const years=[1991, 2007, 1969, 1989];
const ages=[];

for(let i = 0; i<years.length; i++){
    ages.push(2037- years[i])
}

console.log(ages);


// continu and break
//continue will terminate current l=execution and start for next loop
//break will terminate the exexution of loops


//continue--below it will be printing only string array elemnts . if not string it will terminate teh currennt iteration and go to next iteration
for(let j=0; j<jonasArray.length; j++){
    if(typeof jonasArray[j] !== 'string') continue;

    console.log(jonasArray[j], typeof(jonasArray[j]));
}


//break
console.log("break")
for(let j=0; j<jonasArray.length; j++){
    if(typeof jonasArray[j] === 'number') break;

    console.log(jonasArray[j], typeof(jonasArray[j]));
}
