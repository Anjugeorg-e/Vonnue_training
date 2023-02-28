const arr=[
    {
        name:'Alice',
        mark:35,
        place:'Kannur'
    },
    {
        name:'Bob',
        mark:28,
        place:'palakkad'
    },
    {
        name:'catherine',
        mark:44,
        place:'Trissur'
    },
    {
        name:'Daniel',
        mark:23,
        place:'kollam'
    }
];
// console.log(arr)

//foreach


//4 elements are there in the array so 4 times foreach callback function will be called
arr.forEach((item) => {
    // console.log(item) //for each element from array will be printed one by one
})

function sum(){
    let sum=0;
    arr.forEach((item) => {
        sum +=item.mark;
    })
    // console.log(sum)
}
// sum()

arr.forEach((item,index)=>{

})//inorder to get the index of eacha rray item use index



//find  -returns first elemnt which satisfies  the providing condition

//find bob name exists 
var found= arr.find((item)=>{
    return item.name === 'Bob';
})
// console.log(found)

//to find first element whose mark less than 30
var lowMark=arr.find((item) => {
    return item.mark<30;
})

// console.log(lowMark)

//filter --returns an array of one or more items. if no matches it will return an empty array
//find all the items whose mark less than 30

var aboveThirty= arr.filter((item) => {
    return item.mark > 30;
})
console.log(aboveThirty)

////////////////////////////////////////////////////////////////////////////////////
//map---will create a newa array with same length of orginal array

var founds = arr.map((item) => {
    return item.name;
})

console.log(founds) //output   [ 'Alice', 'Bob', 'catherine', 'Daniel' ]

//if we want to add new obj also to the mapped array

var founs = arr.map((item) => {
    return{

        ...item,
        country:' india'
    } 
})

console.log(founs)  // a new array with country item also

//////////////////////////////////////
//reduce-- minimize array to a single value

var value= arr.reduce((item) => {
    return 100;
})

var valone=arr.reduce((total, item) => {
    //return 100;
    return item.mark;
})
//console.log(valone) //in this case last time 100 will be printed
console.log(valone) // here mark of last person will be printed

//total returns the value written from last callback

var nesum=arr.reduce((total,item) => {
    return total + item.mark
}, 0)

console.log(nesum)