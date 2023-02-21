
const n=6;
let b=[1,4,4,6,2,4]
const x= 4;
let count =0;
for(let i=0;i<n;i++){
    if(b[i] === x){
        count+=1;
        
    }
}

console.log(count);

/*
const n=11;
const x= 4;
let count =0;
function totalCount(b[]){
 for(let i=0;i<n;i++){
    if(b[i] === x){
        count+=1; 
    }
}
return count;
}
console.log(totalCount([1,4,2,4,2,4,5,-4,4,4.3]));*/