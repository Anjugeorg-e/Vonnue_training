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
console.log(fruitProcessor(4,2));