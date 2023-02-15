const navHeader = document.querySelector(".nav_header");
const giftSVG =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>';

const navHeaderLinks = document.createElement("ul");
navHeaderLinks.classList.add("nav_header_links");
navHeader.appendChild(navHeaderLinks);
const navheaderUl = document.querySelector(".nav_header_links");

const headerLinks = [
  {
    title: "Sellers' Sales Hub",
    img: "",
  },
  {
    title: "Jewellery & Accessories",
    img: "",
  },
  {
    title: "Clothing & Shoes",
    img: "",
  },
  {
    title: "Home & living",
    img: "",
  },
  {
    title: "Wedding & party",
    img: "",
  },
  {
    title: "Toys & Entertainment",
    img: "",
  },
  {
    title: "Art & Collectibles",
    img: "",
  },
  {
    title: "Craft Supplies",
    img: "",
  },
  {
    title: "Gifts",
    img: giftSVG,
  },
];

function createNav(objectList){
    for (let i = 0; i < objectList.length; i++) {
        const headerLi = document.createElement("li");
        navheaderUl.appendChild(headerLi);
        headerLi.classList.add("nav_headerli")
        if (headerLi.img === "") {
          headerLi.innerHTML = `${objectList[i].title}`;
        }else{
          headerLi.innerHTML = `${objectList[i].img}${objectList[i].title}`
        }
      }
      
}
createNav(headerLinks)




const discoverItems=[
    {
        imgURL:`https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg`,
        title:"Wedding",
    },
    {
        imgURL:`https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg`,
        title:"Jewellery",
    },
    {
        imgURL:"https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg",
        title:"Clothing",
    },
    {
        imgURL:"https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg",
        title:"Home & Living",
    },
    {
        imgURL:"https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg",
        title:"Wall"+" " +"Art",
    },
    {
        imgURL:"https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg",
        title:"Kitchen & dining",
    },
]

/*function creatediscover(){

const subComponents=document.querySelector('.subcomponents');
}*/

function creatediscover(objectlist)
{
const subComponents=document.querySelector('.subcomponents');
const subComponentsDiscover=document.createElement("ul")
subComponents.appendChild(subComponentsDiscover)

for(let i=0;i<objectlist.length; i++){
    console.log(objectlist.length)

    let discoverLi = document.createElement("li");
    subComponentsDiscover.appendChild(discoverLi);
    discoverLi.classList.add("discover_li")

   

    let discoverimg = document.createElement("img");
    discoverLi.appendChild(discoverimg)
    discoverimg.src = objectlist[i].imgURL;


    let discoverspan= document.createElement("span");
    discoverLi.appendChild(discoverspan)
    discoverspan.innerHTML= objectlist[i].title 
   
}
}
creatediscover(discoverItems)

const deals=[
  {
    image:`https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg`,
    span:"Upto 40% off on",
    h3:"Women's Ethnic Clothing",
  
  },
  {
    image:`https://i.etsystatic.com/32501528/c/1488/1488/0/0/…/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg`,
    span:"Upto 40% off on",
    h3:"Women's Western Clothing",
  },
  {
    image:`https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg`,
    span:"Upto 40% off on",
    h3:"Men's Clothing",
  },
  {
    image:`https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg`,
    span:"Upto 40% off on",
    h3:"Fashion jewellery",
  },
  {
    image:`https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg`,
    span:"Upto 40% off on",
    h3:"Winter Clothing",
  },
  {
    image:`https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg`,
    span:"Upto 40% off on",
    h3:"Wedding Clothing",
  },
]
function dealsoftheday(objectList)
{
const dealsComponent = document.querySelector('.dealscomponent');
const dealsSubComponent = document.createElement("ul");
dealsComponent.appendChild(dealsSubComponent)
// console.log("hai")

for(let i =0; i<objectList.length; i++){
  // console.log(deals.length)

  let dealsLi= document.createElement("li");
  dealsSubComponent.appendChild(dealsLi)

  let dealsmaindiv= document.createElement("div")
  dealsLi.appendChild(dealsmaindiv)
  dealsmaindiv.classList.add("deals_maindiv");

  let dealsimg= document.createElement("img");
  dealsmaindiv.appendChild(dealsimg);
  dealsimg.src = objectList[i].image;

  let dealsdiv= document.createElement("div")
  dealsmaindiv.appendChild(dealsdiv)
  dealsdiv.classList.add("deals_div");

  let dealsspan= document.createElement("span")
  dealsdiv.appendChild(dealsspan)
  dealsspan.innerHTML = objectList[i].span;

  let dealsheading= document.createElement("h3");
  dealsdiv.appendChild(dealsheading)
  dealsheading.innerHTML = objectList[i].h3;
}
}
dealsoftheday(deals)


const popularGifts=[
  {
    image:`https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg`,
    h3:"Birth Flower jewelry ,Travel case,Birth MOnth Flower Gift,...",
    
  }
]
