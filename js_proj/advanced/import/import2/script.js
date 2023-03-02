// const name='My Array Library';

// const options = {
//     Version: '1.1',
//     author: 'Code Malayalam'
// }

// export function addAll(arr =[]) { //named export. using addall function name it will be exported
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0)
// }

// export function findMax(arr = []){
//     log('findMax');
//     return Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE', val)
// }

//we have 2 types of exports
//named export--exporting using function name or variables name is known as named export


//way to do named export in other way

// export{
//     addAll,
//     findMax
// };


//default export--it will not keep track of names


const names='My Array Library';

const option = {
    Version: '1.1',
    author: 'Code Malayalam'
}

export function addAll(arr =[]) { //named export. using addall function name it will be exported
    log('addAll');
    return arr.reduce((total, item) => total + item, 0)
}

export default function findMax(arr = []){ //in default name it will be imported
    //only one default impoort will be there
    log('findMax');
    return Math.max(...arr);
}

function log(val){
    console.log('INSIDE', val)
}
