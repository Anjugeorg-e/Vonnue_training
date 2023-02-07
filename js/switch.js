const day='monday'

switch(day){ 
    case 'monday':   //means day===monday
        console.log("today is monday");
        break;    //if no break here console of case tuesday will also come.ies 2 lines of code
                    //till the break stmnt it will execute and print the console outputs
    case 'tuesday':
        console.log("today is tuesday");
        break;
    case 'wednesday':
        console.log("today is wednesday");
        break;
                
    case 'thursday':
        console.log("today is thursday");
        break; 
    case 'friday':
        console.log("today is friday")
        break;
    case 'saturday':
        console.log("oday is saturday")
        break;

    case 'sunday':
        console.log("today is sunday")
        break;

    default:
        console.log("not a avalid day")
        break;                      
}

//
//if u want to declare a varaiable inside if or an else block declare varaiable outside 
//if  for same code

let days='thursday';

if(day === 'monday'){
    console.log("today is monday")
}
else if(day === 'tuesday'){
    console.log("today is monday")
}
else if(day === 'wednesday' || day ==='thursday'){
    console.log("today is the day")
}
else if(day === 'friday' || day ==='saturday'){
    console.log("today is weekday")
}
else if(day === 'sunday'){
    console.log("sunday")

}
else{
    console.log("not a avlid day")
}