//combination of key value pairs
//in array we wont be able to emntion the key name for each value
//we will be using this for unstructured data
//unlike array no need to worry about the index

const anju = {
    FirstName: 'Anju',
    lastName: 'George',
    age: 2023-2000,
    friends: ['theres','anu']
};

//accessing data from object

console.log(anju)
//. notation
console.log(anju.lastName)
//bracket notation
console.log(anju['lastName']);


//we can use this kind of expression also in objects bracket notation
const nameKey = 'Name';
console.log(anju['First' + nameKey]);
console.log(anju['last' + nameKey]);


//.dot notation below will give undefined 


   // const intrest= prompt('whats your interest?choose age, friends,FirstName,lastName')
    // console.log(anju.intrest)

//[] will give the result of what we choosen from prompt

      //const intrests= prompt('whats your interest?choose age, friends,FirstName,lastName')
        //console.log(anju[intrests])

//adding new item to object

anju.location = 'Kerala';
anju['job'] = 'Engineer'
console.log(anju)


//challenge

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends:['MIchael', 'Peter', 'Steven']
};

let p=jonas.firstName;
let m= jonas.friends.length;
let s= jonas.friends[0];
console.log(m)


console.log(`${p} has ${m} friends, and his best friend is called ${s}`)
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)