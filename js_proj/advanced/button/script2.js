(function(){
    var button=document.getElementById('bye');
    button.style.background='red'
    button.onclick= () => {
        console.log(button.innerHTML)
    }
})();


//to solve issues of global scoping we will use self invoking function

// function main2(){
//     var button=document.getElementById('bye');
//     button.style.background='red'
//     button.onclick= () => {
//         console.log(button.innerHTML)
//     }
// }

