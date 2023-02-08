/*function bottles(){
    for(let i=99;i>=0;i--){
        if(i==1){
            console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.`)
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }
        else if (i==0){
            console.log("No more bottles of beer on the wall, no more bottles of beer.")   
            console.log(`Go to the store and buy some more,${i+99} bottles of beer on the wall.`)
        }
         else{
        console.log(i + " "+ "bottles of beer on the wall ," + i + " bottles of beer." )
        console.log("Take one down and pass it around"+ (i-1) +"" +" bottles of beer on the wall.")
    }
}
}
bottles()*/


//console.log("No more bottles of beer on the wall, no more bottles of beer.")
//console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")

for(let i=99;i>=0;i--){
switch(i){
    case 1: 
    console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    break;

    case 0:
        console.log("No more bottles of beer on the wall, no more bottles of beer.");   
        console.log(`Go to the store and buy some more,${99} bottles of beer on the wall.`);
        break;

    default:
        console.log(i + " "+ "bottles of beer on the wall ," + i + " bottles of beer." );
        console.log("Take one down and pass it around"+ (i-1) +"" +" bottles of beer on the wall.");
        break;
}

}
