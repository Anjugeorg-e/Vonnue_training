//heap-for storing objects
//stackk for storing local variables


//spread operator

var obj ={ 
    a:1,
    b:2,
    c:'hello'
}

var obj2={
    ...obj        //will give contents from a to hello without that curly braces
}           //so while doing spread add curly braces also

console.log(obj);
console.log(obj2)

//incase of arrays

var a=[1,2,3]
var b=[...a]
console.log(a) //[1,2,3]
console.log(b) //[1,2,3]

//shallow copy created 
//can be used to concatnate 2 object
//to the new object we can add properties also using spread operator

///////////////////////////////
//in this case we are copying obj1 to obj2 so 
//obj2.c =33 was copied to both obj1 and obj2
var obj1={
    a:1,
    b:2
}
var obj2=obj1
obj2.c=33;

console.log(obj1, obj2)
////////////////////////
//in the below case copy created using spread operator
//so the change for obj2 is only for obj2 not for obj 1.this is known as shallow copy

var obj1={
    a:1,
    b:2
}
var obj2={...obj1}
obj2.c=33;

console.log(obj1, obj2)

////////////////////
// in shallow copy inner objects also updated
//in below even though we changed name of obj3 from c object it got updated in obj 4 as well
//hence its usin ref to same memory



var obj3={
    a:1,
    b:2,
    c:{
        name: 'raman',
        age:45
    }
}
var obj4={...obj3}
obj3.c.name='anju';

console.log(obj3, obj4)

////////////////
//here d value of obj3 git updated but its not updted in obj4 
var obj3={
    a:1,
    b:2,
    c:{
        name: 'raman',
        age:45
    },
    d:44
}
var obj4={...obj3}
obj3.c.name='anju';
obj3.d=45

console.log(obj3, obj4)

////////////////////////////////////////