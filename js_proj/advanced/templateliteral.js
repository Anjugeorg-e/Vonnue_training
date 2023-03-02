// //

// const var1= "code malayalam.it's wonderful";
// // const var1="code Malayalm.Its"s wonderful; throws a error add backslash there also 

// // const var2 = "code malayalm.it's wonderful";  working code

// // const var2= 'code Malayalam. It's wonderful'; // not working in case of single quotes

// const var2= 'code Malayalm .It\'s wonderful'  //working add a backslash

// //use template literal. 
//     //which will helps to create multiline string
//     //makes expression inside a string

// //multiline expression

// const var3=` code Malyalam.
//  it"s wonderful`;    

// console.log(var1)
// console.log(var2)
// console.log(var3)


// document.body.innerHTML = '<div className="item"><h4>Product Name</h4><div>Price: 00</div></div>' //using string

// document.body.innerHTML = '<div className="item">' + 
//                           '<h4>Product Name</h4>' + 
//                           '<div>Price: 00</div>' + 
//                           '</div>' //to split into small single quotes


document.body.innerHTML=`
<div className="item">
    <h4>product Name</h4>
    <div>price: 01</div>
</div>                
` ;                         


//exprssion inside a string

var productName= "pen";
const price =12;

// const value= 'The ' + productName + '  is ' +  price

const value= `The ${productName} is ${price} price`

const msg= ` The product is ${price > 10 ? 'costly' : 'cheap'}`
console.log(value)
console.log(msg)



const products=[
    {
        productName: 'pen',
        price:10
},
{
    productName:'Book',
    price:20
}
];

document.body.innerHTML = products.map((item) => {
    return ` 
    <div className="item">
     <h4>${item.productName}</h4>
     <div>price:${item.price}</div>
    </div>
    `;
})
