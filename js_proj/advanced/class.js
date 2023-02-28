//for creating objects 
//to define howmany properties required to build a class
//sometimes we have 3 students and they need 3 objects so in those cases instead of creating 3 full objects we can use below method


class Student{
    name;
    yob;

    constructor(name, yob){  //constructor 
        this.name=name;
        this.yob=yob;
    }
    getAge(){
        return new Date().getFullYear() - this.yob;
    };
    getName(){
        return this.name;
    }

}

var student1= new Student('alan', 1990); //new object created
var student2= new Student('anju', 1980);
var student3= new Student('arun', 1970);

console.log(student1,student1.getAge(),student1.getName()) // we will get undefined  for nam,yob and al
console.log(student2,student2.getAge(),student2.getName())
console.log(student3,student3.getAge(),student3.getName())


//static functions

//to access a function with classsname.function name we need to use static functions