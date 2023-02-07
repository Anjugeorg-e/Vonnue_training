

const cutpieces = function (fruits) {
    return fruits * 4;
}

const fruitProcessor = function (apples, oranges) {
    const applepieces = cutpieces(apples);
    const orangepieces = cutpieces(oranges)

    const juice = `JUice with ${applepieces} apples & ${orangepieces} oranges.`
    return juice;

}
console.log(fruitProcessor(2, 3));


//

// we can use same parametr name in diff functions. they will be diffrent only
 
const calcAge = function(birthYear){
    return 2023 - birthYear;
}

const retirement = function(birthYear, firstName){
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    //return retirement;

    if(retirement > 0){
        console.log`${firstName}`;  // it will put output hence its above return ststmnt
        return retirement;
        // if console.lo put here it wont get executed .since the return keyword will terminate the function execution
    }else{
        return -1;
    }
}

console.log(retirement(1500, 'Anju'))

//coding challlenge

const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

let scoreDolphin = calcAverage(44,23,71);
let scorKolas = calcAverage(65,54,49);

const checkWinner=function(avgDolphins, avgKolas){
    if(avgDolphins>= (2*avgKolas)){
        console.log(`dolphin wins ${avgDolphins} vs. ${avgKolas}`);
    }else if(avgKolas >= 2*avgDolphins){
        console.log(`kolas wins ${avgKolas} vs. ${avgDolphins}`)
    }
    else{
        console.log("no one wins")
    }

}
checkWinner(scoreDolphin, scorKolas);
checkWinner(576, 111);

//test2

scoreDolphin = calcAverage(85, 54, 41);
scorKolas = calcAverage(23,34,27);

console.log(scoreDolphin, scorKolas)
checkWinner(scoreDolphin, scorKolas);

