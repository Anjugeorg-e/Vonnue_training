let x = [1, 2, 3, 4];
let y = [5, 6, 7, 8];
let t = [[1,5], [2,6], [3,7], [4,8]];
let s;

let a = [1, 2, 3, 4];
let b = [5, 6]
let c = [[1,5], [2,6], [3], [4]];
let ret = [[]];   
function pair(x, y) {
         
        for(let i =0; i<x.length; i++)
        {
          for(let j=0; j<y.length; j++)
          {           
              if(i=j)
                s= [x[i],y[j]]
                console.log(s)
                ret.push(s)
              
          }
}
}
console.log(ret)

p = pair(x, y);
console.log(p)
/*
function verify(p, t) {
        if (p.length === 0) {
                console.log("test case 1 fails", p.length, t.length);
                return
        }
        if (p.length !== t.length) {
                console.log("test case 1 fails", p.length, t.length);
                return
        }
 // iterate and make sure the inner array lenght is also same
        for (let i = 0; i < p.length; i++) {
                let x = p[i];
                let y = t[i];
                if (x.length !== y.length) {
                        console.log("test case 1 fails", x.length, y.length);
                        return
                }
                for (let j = 0; j < x.length; j++) {
                        if (x[j] !== y[j]) {
                                console.log("test case 1 fails", x.length, y.length);
                                return
                        }
                }
        }
        console.log("test case 1 passes");
}
//
p = pair(x, y);
// Test case 1
// make sure p and t are the same, if yes console.log("test case 1 passes"), else console.log("test case 1 fails");
verify(p, t);

*/