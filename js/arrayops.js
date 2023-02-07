// push to add elemnts to end of an array

const friends = ['anju','george','arun'];
friends.push('cat');
console.log(friends)
//outpt--an array with  these 4 elements
    // push method will be returning the length of the new array
/////////////////////////////////////////

//to add elemnt to the beginning of the array

friends.unshift('joe');
console.log(friends);
                //unshift return the length of the array
///////////////////////////////////////////////

//pop to remove element from the end///////

friends.pop()
console.log(friends)
           //pop method will be returning the removed elemnt 

//////////////////////////////////////////////////
//to remove elemt from first use shift

friends.shift()
console.log(friends);

///////////////////////////////////////
// index of an element in an array

console.log(friends.indexOf('arun'))

        //if no element there , then  value of index will be -1.


///////////////////////////////////////////////////////

//includes ----return true if elemnt is tehre in array else false if its not there
  //it will use strict equality check
  //

  console.log(friends.includes('anju')); //output true
  console.log(friends.includes('achu')); //not there in list so output will be false 

  friends.push(23);
  console.log(friends)
  console.log(friends.includes(23))  //true
  console.log(friends.includes('23')) //false

  ///////////////////////////////////////////////
  // we can add  these includes within if stmnt 

  if(friends.includes('anju')){        // true 
    console.log('you have a friend called anju')
  }


  //////////////////////////////
  ///coding challenge



  const bills=[125, 555, 44];
  let tips=[];
  let total=[];

function calcTip(bill){
    let tip1=bill*(15/100)
    let tip2=bill*(20/100)
    let tip=bill>=50 && bill<=300 ?  tip1 : tip2
    return tip;

}
 tips=[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 console.log(bills, tips)

 total=[bills[0] + tips[0], bills[1]+tips[1], bills[2]+tips[2]]
 console.log(bills, tips, total)
/*
let one = (calcTip(bills[0]))
tips.push(one)
let two = (calcTip(bills[1]))
tips.push(two)
let three = (calcTip(bills[2]))
tips.push(three)

console.log(tips)*/
