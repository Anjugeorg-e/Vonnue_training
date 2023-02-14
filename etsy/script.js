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
