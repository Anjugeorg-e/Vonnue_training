//  //map is used to transform an array to an another array

     const array1=[5, 1, 3, 2, 6]

     function double(x){
      return x*2;
     }

            function triple(x){
             return x*3;
     }

        function binary(x)
     {
          return x.toString(2)
       }
         const outputs = array1.map(double)
          console.log(outputs)


//  //double function calculates the double of each item from arr and prints to output array

//      const output = arr.map(triple)
//      console.log(output)

//  //triple calculates the triple of  each item from arr

//         const output= arr.map(binary)
//         console.log(output)

//  //bimnary finds the binary value for the array items

//        const output= arr.map(function binary(x){
//        return x.toString(2)
//        })

//  console.log(output)

//  //above willl print the same list for binary numbers

//          const output = arr.map((x) => x.toString(2));
//          console.log(output)

 //above also same



 //filter//

 //filter function is used to filter an item from an array
 //for example if you want filter all ites which are odd inside an array
 //or all items greater than 4


 const array=[5, 4, 3, 2, 1];
 //filter all odd values

 function isOdd(x){
    return x%2;
 }

 function isEven(x){
    return x%2 === 0;
 }

 function gtFour(x){
    return x>4;
 }
 const four=arr.filter(gtFour)
 const outpu= arr.filter(isEven)
 const output = arr.filter(isOdd)
 console.log(output)
 console.log(outpu)
 console.log(four)



 //reduce
//take all  items from an array and come up with a single item out pf them
//for exxample loop through all items and find the sum of all items
// or loop and find max of all numbers
//or graetest of all items

 const arr=[2, 4, 5, 6,1]

//  function findSum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum=sum+arr[i]
//     }
//     return sum;
//  }
// console.log(findSum(arr))

//arr.reduce iterate over each elemnt in the array 
//curr will be the current item inside the array
//curr= arr[i]

//accumulator is the thing which stores the result
//acc=sum


//reduce function will have 2 parametrs oneis below 
//and other is initail value of accumulator


const output = arr.reduce(function(acc, curr){
  acc= acc + curr;
  return acc;
},0)

console.log(output)

//const s= arr.reducce(function(acc,curr){content},initail value of acc)


//largest   elemnt  in an array

const arra=[3, 2, 8,9, 5]

const outpu = arra.reduce(function(acc, curr){

    if(curr>acc){
        acc=curr
    }
    return acc
},0)
console.log(outpu)



const users=[
    {firstname:"anju", lastname:"george", age:26},
    {firstname:"ann", lastname:"annnnn", age:26},
    {firstname:"aunn", lastname:"aiin", age:15},
    
]
const out=users.map((x) => x.firstname + " "+  x.lastname)
console.log(out)


//acc = {26:2, 15:1} output
//initaially acc is empty {}
const os=users.reduce(function(acc, curr){

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age]=1
    }
    return acc;
},{})

console.log(os)



//filter example
const user=[
    {firstname:"anju", lastname:"george", age:56},
    {firstname:"ann", lastname:"annnnn", age:26},
    {firstname:"aunn", lastname:"aiin", age:15},
    
]

const oup= user.filter((x) => x.age<30).map((x) => x.firstname)
console.log(oup)

//filter filtered all th objects whose age less than 30 
//and then we ran map over that filtered array and fetched the firstname alone

//reduce for the same task

