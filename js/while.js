/*for(let rep =1; rep <= 10; rep++){
    console.log(`lifting weights repetition ${rep}`)
}
*/

//while

let rep=1;
while(rep<=10){
    console.log(`lifting weights repetition ${rep}`)
    rep++;
}

//while can be used to solve problems which is n0t having counters

   //math.random-0 to 1. *6//math.trunc---to remove decimal

   let dice=Math.trunc(Math.random()*6) + 1 ; 
while(dice !== 6 ){
      console.log(`you rolled a ${dice}`)  
      dice=Math.trunc(Math.random()*6) + 1 ; 

      if(dice === 6){
        console.log("loop is about to end")
      }
}

//coding challenge

const bills= [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips=[];
const total=[];

const calcTip=function (bills){
    return bills>=50 && bills<=300 ?  bills*0.15 : bills*0.2
}
for(let i=0; i<=bills.length;i++){
    const tip= calcTip(bills[i])
    
    tips.push(tip);
    total.push(tip+ bills[i])
}

console.log(tips);
console.log(total)


const calcAverage= function (arr){
   let sum =0;
   for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
   }
   console.log(sum)
   return sum/arr.length;
}
console.log(calcAverage([2,4,3]))