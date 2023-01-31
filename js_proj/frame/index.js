//let i;
//let array;
/*array = [1, 2, 3, 4, 5];
console.log(array);*/


/*
let i;
let array;
array = [8, 2, 3, 4, 5];
console.log(array)

*/
/*
let array;
let max = array[0];

function greater() {

    for (i = 1; i < array.length; i++) {

        if (array[i] > max) {
            max = array[i]
        }
    }
    console.log(max)


}

greater();

*/

let min;
let i;
//let arr=[1,2,3,4,5,6]


function greater(arr) {
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    
    }
    let min=arr.indexOf(max)

    return (min);
   
}
console.log(greater([1,4,8]));


/*

let arr=[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++){
   console.log(arr[i])
}


 //array[i]=array[i+1]  //array(0)---less
            //array[i+1]=temp; */