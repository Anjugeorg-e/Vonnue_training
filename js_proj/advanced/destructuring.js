//destructuring--technique to assign   value from an object or an array to a variable

//real scenario
// const obj={
//     name:'code malayalam',
//     place:'kerala',
//     rank:100
// };
// function myFunction(){
//     const name= obj1.name;
//     const place= obj1.place;
//     const rank= obj1.rank;

//     console.log(name, place, rank)
// }

// myFunction();

//instead of adding new variables and assingning using the . operator we can use below method or destructuring


const obj1 ={
    name:"code malayalam",
    place:'Kerala',
    rank: 100
};

function myFunction(){
    const{
        name,
        place,
        rank,
    } = obj1         //instead of  creating and using a name 2 times we can declare in this way known as object destructuring
    console.log(name, place, rank)
    console.log(name) // for getting anme alone
}

// myFunction();
/////////////

const obj2 ={
    name:"code malayalam",
    place:'Kerala',
    rank: 100
};

function myFunction(){
    const{
           name,
        ...others  //remaing things from obj2 excluding name
    } = obj2;       
    console.log(name, others)  // we will get place and rank as key value pair
}

// myFunction();

/////////////
const obj3 ={
    name:"code malayalam",
    place:'Kerala',
    rank: 100,
    status: true  // if its null thats a valid value. if its undefined that will take by  default value
};

function myFunction(){
    const{
           name,
           place,
           rank,
        //    status
           status =false // be default value we are giving if there is no value
    } = obj3;       
    console.log(name, place, rank, status)  // we will get undefined in place of status hence  no value in status 
    console.log(name, place, rank, status) //status will be false if no values for status in obj3
    console.log(name, place, rank, status) //value of status true hence we added true value for status in obj3

}

// myFunction();
//////////


var on={
    name:'code',
    place:'kerala'
}
var ob={
    name:'bob',
    place:'america'
}

function abc(){
    var{
        name,
        place,
    }=on;
    var{
        name,
        place
    }=ob;

    console.log(name, place)
}
// abc()

//in the above case we will get bob, amerca .y?
//because variables have the same name 

////////

var on={
    name:'code',
    place:'kerala'
}
var ob={
    name:'bob',
    place:'america'
}

function abc(){
    var{
        name,
        place,
    }=on;
    var{
        name:name2,
        place:place2
    }=ob;

    console.log(name, place,name2, place2)
}
abc()
//in this case we will get code kerala  from name ,place option
//hence we added 2 variables also

//nested destructuring

var obj={
    name:'alice',
    mark:23,
    subject:{
        teacher:'bob'
    }
}
var{
    // subject
    subject:{
        teacher
    }
}=obj;

// console.log(subject) // { teacher: 'bob' }// here we will get obj containg teacher name we need teacher name 
console.log(teacher)  //output is bob. since we passed subject object to the new variable