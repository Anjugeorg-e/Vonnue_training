// function x(){
//     console.log("namaste")
// }

// function y(x){
//     x();
// }
//x is the call back function
//y is the  higher order function


const radius=[3, 1, 2, 4];

const area= function(radius){
    return Math.PI * radius* radius;
}

const circumeference=function(radius){
    return 2 * Math.PI * radius;
};

const diameter= function(radius){
    return 2 * radius;
};

const calculate=function(radius, logic){
    const output =[]
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
  return output;

}

console.log(push(radius,area))
console.log(push(radius,circumeference))
console.log(push(radius,diameter))

//map
//map function maps an array to a logic

console.log(radius.map(area))        //map radius to area logic. both area value will be same
//map functon also creates a new arry iterate over the given array and gives the output based on logoic