const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends:['MIchael', 'Peter', 'Steven'],
    hasDriversLicense: true,


    //use function expression instead of normal function inside an object
   // calcAge: function(birthYear){

  // calcAge: function(){
   // console.log(this)  //entire object
       // return 2037 - this.birthYear;
    //}

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};
console.log(jonas.calcAge(1991)); //using .for function
console.log(jonas['calcAge'](jonas.birthYear)); //using [] for a function


console.log(jonas.calcAge())
console.log(jonas)

console.log(jonas.age);


const jons = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends:['MIchael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} -year old ${jons.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jons.getSummary())


//challenge

const Mark = {
    fullName: 'Mark MIller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        const BMI= this.mass/(this.height*this.height)
        return BMI;
    }
};

const John = {
    fullName: 'John Smith',
    mass: 92,
    height:1.95,

    calcBMI: function(){
        const BMI= this.mass/(this.height*this.height)
        return BMI;
    }
};

if(Mark.calcBMI() > John.calcBMI()){
    console.log(` ${Mark.fullName} 's BMI ${Mark.calcBMI()} is higher than ${John.fullName}'s  ${John.calcBMI()} `)
}else{
    console.log(` ${John.fullName} 's BMI ${John.calcBMI()} is higher than ${Mark.fullName}'s  ${Mark.calcBMI()} `) 
}