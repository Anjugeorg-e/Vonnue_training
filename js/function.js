function names(){
    console.log("name is Anju");
}

//invoking /running or calling a function
names() // we can call a function as many times as we need 

//function name(parameter)
//parameter are like variable



function fruitProcessor(apples,oranges){
   // console.log(apples, oranges); // to see the argument values

    const juice = ` juice with ${apples} and ${oranges}`;
    return juice;  //returning the content of juice
}


const applejuice=fruitProcessor(4,0);
console.log(applejuice); //op will be the return content

//other way to print in console
console.log(fruitProcessor(4,2));   // arguments


const num=Number('23');    //23 is a string
console.log(typeof(num));          // type is number 



////.................................................////
// function declaration   -functions cab be called before initialized.declaring variables in top of function will work fine

function age(birthYear){
    const ages=2023-birthYear;
    return ages;
                                //return 2023-birthyear
}
console.log(age(2000));        // output is 23

//function expression  -function cant be called before initialization.
const age2 = function(birthYear){      //function without a name
return 2023-birthYear;
}
const age21=age2(2000)
console.log(age21)                 //output 23 
