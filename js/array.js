+//array is a not primitive
//so we can change the elemnts using index option  even though its declared as const 

const friends = ['michael', 'steven', 'peter']
console.log(friends);

///////////////////////////////////////////////
//other way of declaring an array//

const arr=new Array(1991, 1987, 1298, 2000)
console.log(arr);

////////////////////////////////////////////////

console.log(arr[0]);    //first element
console.log(friends.length)  //length of an array
console.log(friends[friends.length - 1 ])   // last element

////////////////////////////////////////////////////////////

friends[2] = 'anju';
console.log(friends);

//friends=["anju","geo","aru"]-----------------not possible to change the complete content 
////////////////////////////////////////////////////////////////

const name = ['anju','george',2023-2000,'edoor']//----------possible to declare like this.calculation also will be performed.
console.log(name)

///////////////////////////////////////////////////////

const firstName = "anju";
const lists = [firstName, "geo",23,friends];  // use the prev variable  and also a comb of diff dat atypes
console.log(lists);


//   friends array will print like array[3]..wont show the contents.
/////////////////////////////////////////////////////////////////////////////

//we can't pass an array to a function argument .

const calcAge= function(birthyear){
return 2023 - birthyear;
}
const years=[1990,1899,2000,2019];
console.log(years)
console.log(calcAge(years))
//////output will be NaN

///////////////////////////////////////////
// to print the output in an array 

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length -1 ])
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length-1])]

console.log(ages)
///////////////////////////////////////////