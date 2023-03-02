// const value=addArray([1, 2, 3]);
// console.log(value)

//function is there in index.js

import{ addArray } from './index.js'  //./??
import { addArray as ConcatArray} from './index1.js'; //to avoid overwritting use as and give a name


const value=addArray([1, 2, 3]);
const value2=ConcatArray([1,2,3], [4,5,6])
console.log(value2)
console.log(value)