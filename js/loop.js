const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['MIchael', 'Peter', 'Steven']
];
for (let i = jonas.length-1; i >=0; i--) {  // if its i= jonas.length----first elemnt i will be 5 that will be undefined.
    console.log(jonas[i])
}
//undefined for first elemnt
for (let i = jonas.length; i >=0; i--) {  //jonas[5]---undefined
    console.log(jonas[i])
}


//inner loop
for(let ex=1; ex< 4; ex++){
    console.log(`-------starting excercise ${ex}------`);

    for(let rep = 1; rep<6; rep++){
        console.log(`---winner ${rep}----`)
    }
}