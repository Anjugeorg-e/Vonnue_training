

//calling the main div of ul from document(html) and assigning to a value
const navHeader=document.querySelector('.nav_header')  
//make the html ul to a comment and then 
//createlemnt   of ul.. for ul,li,p,span and all use create element
//createattribute----for img src and all use create attribute
//assign a value also
const navHeaderLinks = document.createElement('ul')

//for images from svg export download the link take the eaxct size also
const giftSVG='<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>'

//adding the ul to a class of nav_header_links

navHeaderLinks.classList.add("nav_header_links")

//to the main div container navheader , adding the ul class. 
navHeader.appendChild(navHeaderLinks)

//create a new name and assign the ul classname to  it
const navheaderUl = document.querySelector(".nav_header_links");
//create the li objects as an array of objects and give a value
//for null images give an empty string
//for  the images taht we need tooa dd mention their name inside img tag
headerLinks=[
    {
        title: "Sellers' Sales Hub",
        img:'',
    },
    {
        title: "Jewellery & Accessories",
        img: '',
    },
    {
        title: "Clothing & Shoes",
        img:'',
    },
    {
        title: "Home & living",
        img:'',
    },
    {
        title:"Wedding & party",
        img:'',
    },
    {
        title:"Toys & Entertainment",
        img:'',
    },
    {
        title:"Art & Collectibles",
        img:'',
    },
    {
        title:"Craft Supplies",
        img: giftSVG,
    },
]

//always try to insert inside a function

function createNav(){
    //start a foor loop starting from 0 to till ul link length
    for (let i = 0; i < headerLinks.length; i++) {
        //create a li elemennet
        const headerLi = document.createElement("li");
        //to the navheader ul ppending the li class
        navheaderUl.appendChild(headerLi);
        //if no img we need the title alone
        if (headerLi.img === "") {
          headerLi.innerHTML = `${headerLinks[i].title}`;
          //else we need both img and title
        }else{
          headerLi.innerHTML = `${headerLinks[i].img}${headerLinks[i].title}`
        }
      }
      
}
//then call th efunction
createNav()

//we can use the below fun also 
//here we are using objectlist and taking objectlist as headerlinks ie array of object name
function createNav(objectList){
    for (let i = 0; i < objectList.length; i++) {
        const headerLi = document.createElement("li");
        navheaderUl.appendChild(headerLi);
        if (headerLi.img === "") {
          headerLi.innerHTML = `${objectList[i].title}`;
        }else{
          headerLi.innerHTML = `${objectList[i].img}${objectList[i].title}`
        }
      }
      
}
createNav(headerLinks)








const subComponents=document.querySelector('.subcomponents');
const subComponentsDiscover=document.createElement("ul")
subComponents.appendChild(subComponentsDiscover)

for(let i=0;i<discoverItems.length; i++){
    console.log(discoverItems.length)

    let discoverLi = document.createElement("li");
    subComponentsDiscover.appendChild(discoverLi);

   

    let discoverimg = document.createElement("img");
    discoverLi.appendChild(discoverimg)
    discoverimg.src = discoverItems[i].imgURL;


    let discoverspan= document.createElement("span");
    discoverLi.appendChild(discoverspan)
    discoverspan.innerHTML= discoverItems[i].title 
}



const dealsComponent = document.querySelector('.dealscomponent');
const dealsSubComponent = document.createElement("ul");
dealsComponent.appendChild(dealsSubComponent)
// console.log("hai")




for(let i =0; i<deals.length; i++){
  // console.log(deals.length)

  let dealsLi= document.createElement("li");
  dealsSubComponent.appendChild(dealsLi)

  let dealsmaindiv= document.createElement("div")
  dealsLi.appendChild(dealsmaindiv)
  dealsmaindiv.classList.add("deals_maindiv");


  let dealsimg= document.createElement("img");
  dealsmaindiv.appendChild(dealsimg);
  dealsimg.src = deals[i].image;

  let dealsdiv= document.createElement("div")
  dealsmaindiv.appendChild(dealsdiv)
  dealsdiv.classList.add("deals_div");


  let dealsspan= document.createElement("span")
  dealsdiv.appendChild(dealsspan)
  dealsspan.innerHTML = deals[i].span;

  let dealsheading= document.createElement("h3");
  dealsdiv.appendChild(dealsheading)
  dealsheading.innerHTML = deals[i].h3;
}



const popularGifts = [
    {
      img: `https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg`,
      h3: "Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case",
      star: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`,
      starcount: 4,
      rating: "(9,792)",
      price: "",
      actualprice: 1709,
      discount: 50,
      deliverytype: "",
    },
    {
      img: `https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg`,
      h3: "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
      star: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`,
      starcount: 5,
      rating: "(13,853)",
      price: "",
      actualprice: 1452,
      discount: 50,
      deliverytype: "",
    },
    {
      img: `https://i.etsystatic.com/25168585/c/2500/1987/0/181/il/214e7e/4589233930/il_340x270.4589233930_dg79.jpg`,
      h3: "Custom Pet Portraits Using Pet Photo Personalized Digital Dog Portraits Cat Portraits Custom Dog Portraits Custom Pet Art Pet Drawing",
      star: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`,
      starcount: 5,
      rating: "(11,504)",
      price: "",
      actualprice: 3296,
      discount: 50,
      deliverytype: "FREE delivery",
    },
    {
      img: `https://i.etsystatic.com/27890741/c/2343/1862/320/560/il/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg`,
      h3: "Heart Keychain Set - Made with Authentic LEGO® Bricks, Matching keychains, Gift Set for Couples, Best Friends - Very High Quality & DURABLE",
      star: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`,
      starcount: 5,
      rating: "(13,015)",
      price: " ",
      actualprice: 1278,
      discount: 40,
      deliverytype: "",
    },
    {
      img: `https://i.etsystatic.com/28045281/r/il/3f41fa/3897994052/il_340x270.3897994052_l8xd.jpg`,
      h3: "Sun catcher/ Crystal suncatcher/ Crystal Rainbow maker/ Aurora gemstone suncatcher/ crystal prism/ wall hanging/ Home decor/ Gift 4 women",
      star: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`,
      starcount: 5,
      rating: "(7,048)",
      price: " ",
      actualprice: 4695,
      discount: 50,
      deliverytype: "FREE delivery",
    },
    {
      img: `https://i.etsystatic.com/26694795/c/2445/1943/282/0/il/035b01/3254592822/il_340x270.3254592822_5dss.jpg`,
      h3: "Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift Folding Knife Groomsmen Gift Anniversary Wedding Personalized Gift for Men",
      star: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`,
      starcount: 5,
      rating: "(6,473)",
      price: " ",
      actualprice: 1539,
      discount: 60,
      deliverytype: "",
    },
  ];
  const containerGifts = document.querySelector(".container_gifts");
  const giftsComponent = document.createElement("ul");
  containerGifts.appendChild(giftsComponent);
  
  for (let i = 0; i < popularGifts.length; i++) {
    const giftsLi = document.createElement("li");
    giftsComponent.appendChild(giftsLi);
  
    let giftsMainDiv = document.createElement("div");
    giftsLi.appendChild(giftsMainDiv);
    giftsMainDiv.classList.add("gifts_maindiv");
  
    let giftsimg = document.createElement("img");
    giftsMainDiv.appendChild(giftsimg);
    giftsimg.src = popularGifts[i].img;
  
    let giftsdiv = document.createElement("div");
    giftsMainDiv.appendChild(giftsdiv);
    giftsdiv.classList.add("gifts_div");
  
    let giftsheading = document.createElement("h3");
    giftsdiv.appendChild(giftsheading);
    giftsheading.innerHTML = popularGifts[i].h3;
  
    let NumberStar = popularGifts[i].starcount;
    function starRow(NumberStar) 
    {
      if (NumberStar == 5) 
      {
        for (let j = 1; j <= NumberStar; j++) 
        {
          let giftsRating = document.createElement("span");
          giftsdiv.appendChild(giftsRating);
          giftsRating.innerHTML = popularGifts[i].star;
        }
      } else 
      {
        for (let j = 1; j < NumberStar; j++) 
        {
          let giftfourRating = document.createElement("span");
          giftsdiv.appendChild(giftfourRating);
          giftfourRating.innerHTML = popularGifts[i].star;
        }
        let gifthalffourRating = document.createElement("span");
        giftsdiv.appendChild(gifthalffourRating);
        gifthalffourRating.innerHTML = halfstar;
      }
    }
    starRow(NumberStar);
  
    let starRating = document.createElement("div");
    giftsdiv.appendChild(starRating);
    starRating.innerHTML = popularGifts[i].rating;
  
    let newPrice = document.createElement("span");
    giftsdiv.appendChild(newPrice);
    newPrice.innerHTML ="₹" + rateOfItem(popularGifts[i].actualprice, popularGifts[i].discount);
  
    let actualPrice = document.createElement("span");
    giftsdiv.appendChild(actualPrice);
    actualPrice.innerHTML = "₹" + popularGifts[i].actualprice;
  
    let discountValue = document.createElement("span");
    giftsdiv.appendChild(discountValue);
    discountValue.innerHTML = "(" + popularGifts[i].discount + "%  off" + ")";
  
    function rateOfItem(actualPrice, discountValue) 
    {
      let newRate;
      newRate = Math.round((actualPrice / 100) * discountValue);
  
      console.log(newRate);
      return newRate;
    }
  
   const DeliveryType=document.createElement("span");
   giftsdiv.appendChild(DeliveryType)
   DeliveryType.innerHTML=popularGifts[i].deliverytype;

/*var array=[14,12,13];
var myarray=array[0];
console.log(myarray);

var aa=[12,13,14];
aa[1]=66;
console.log(aa);

var arr=[[1,2,3],[4,5,6],[7,8,9],[[12,13,14],67,23]];
var a=arr[1][2];
console.log(a);*/

/*var myarray= [["anju",1],["george",2]];
myarray.push(["arun",5]);
console.log(myarray);

var marray=[["john" , 23], ["anju", 43]];
var arr=marray.pop();
console.log(arr);

var sarray=[["john",23], ["anju", 23]];
var ars=sarray.shift();
console.log(ars);*/

/*var parray=[["john",23],["sam", 24]];
var qarray=parray.unshift(["anju", 23]);
console.log(qarray);*/

//shoppping list

var list=[["milk", 3], ["banana",2], ["chocolate" , 5]];
console.log(list);



c


/*var name="Anju";
name="george";
//name[0]="a"  not possible
console.log(name);

var str="i am \"Anju\" George";
console.log(str); 

var mystr="firstline\n\t\\secondline\nthirdline"
console.log(mystr)

var st="this is -" + " a new beginning!"
console.log(st);

var sm="new string" ;
sm+="  latest string" ;
console.log(sm);

var na="anju";
var sa=" george"
na+= sa;
console.log(na)

var namelength=0;
var  fnam="Anju";
namelength=fnam.length;
console.log(namelength)

var firstletternamm="";
var fname="Anju"
var firstletternamm=fname[fname.length-1]
//firstletternamm=fname[0];
//firstletternamm=fname[1];
console.log(firstletternamm);

/*function word(noun, adjective){
    var result="";
    result+="the  " + adjective + " " + noun;
    return result;
}
console.log(word("dog", "big"));

var arr=[["anju",1],["george",2]];
console.log(arr);

/*var myst="my name is   " + na + "  iam well";
console.log(myst)*/



/*var a=3; //shorthand for addition and assigmnet
a+=2;
console.log(a)

var b=2;
b+=4;
console.log(b)

var c=5;
c-=2;
console.log(c);

var d=6;
d-=2;
console.log(d)

var e=8;
e*=2;
console.log(e)

var f=12;
f/=6;
console.log(f) */

/*var diff=45-33;
console.log(diff);

var mul=45*33;
console.log(mul);

var div=66/33;
console.log(div)

var num=87;
num++;
console.log(num)

var nu=87;
nu--;
console.log(nu)

var dec=87.0;
console.log(dec)

var prod=2.0*3.1;
console.log(prod);

var divi=4.4/2.2;
console.log(divi);

var rem=9%3;
console.log(rem);*/



/*var sum=10+10;
console.log(sum);*/


/*var a=5;
var b=10;
var c="iam a";

a=a+1;
b=b+1;
c=c+"";

console.log(a);
console.log(b);
console.log(c);*/


/*var a;
var b=2;
a=7;
b=a;
console.log(b);*/


//console.log(a);

//console.log("a");

/*
let firstname="Anju"
let lastname= "George"
let fullname=firstname + " " + lastname;
console.log(fullname);

*/
/*
let name= "Linda"
let greeting="Hi There!"

function greetLInda(){
    console.log(name + " " + greeting);
}

greetLInda(); */
/*
let mypoints = 3
function add3points(){
    mypoints+=3;
}

function removepoints(){
    mypoints-=1;   
}
add3points();
add3points();
add3points();
removepoints();
removepoints();

console.log(mypoints);


let arr=["name:Anju" , "place: iritty" , " course : btech"]
console.log(arr)*/
/*
let arra=[3,4]
arra.push(6)
console.log(arra) */

let array=[
    "hey! how is it going",
    "im great. thank you",
    "all good"]
array.push("new message") 
console.log(array)   

array.pop()
console.log(array)


for(let i=10;i<101;i+=10){
    console.log(i)
}






