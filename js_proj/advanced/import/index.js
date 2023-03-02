// console.log('script1');
// function addArray(arr){
//     return arr.reduce((total, item) => total + item, 0)
// }
//export--- 

console.log('script1');
export function addArray(arr){ //allowing other files to access a function from a file
    //addarray anyone caN Use now
    return arr.reduce((total, item) => total + item, 0)
}

//function to print total value of array items
