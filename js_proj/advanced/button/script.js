(function(){
    var button=document.getElementById('hello');
    button.style.background='green'
    button.onclick= () => {
        console.log(button.innerHTML)
    }

})();
//declare a function and inside bracket and accesssing it using empty brackets
//self invocing function to avoid global scoping issues


//old code below


// function main(){
//     var button=document.getElementById('hello');
//     button.style.background='green'
//     button.onclick= () => {
//         console.log(button.innerHTML)
//     }
// }
// main();