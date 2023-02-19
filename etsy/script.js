const navHeader = document.querySelector(".nav_header");
const giftSVG =
  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>';
const halfstar = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path class="background" d="M12.007 16.97l4.21 2.95c.182.12.422.11.592-.027.17-.138.23-.37.15-.574l-1.484-5.33 4.306-3.073c.182-.12.265-.347.203-.557-.065-.21-.258-.352-.477-.352h-5.35l-1.67-5.642c-.06-.215-.257-.363-.48-.363-.225 0-.42.148-.482.363v12.94l.48-.335z" fill="#E1E3DF"></path><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z" fill="#222222"></path></svg>`;

const playimg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>`;

const whiteHeartImg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`;

const redHeartImg = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`;

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

function createNav(objectList) {
  for (let i = 0; i < objectList.length; i++) {
    const headerLi = document.createElement("li");
    navheaderUl.appendChild(headerLi);
    headerLi.classList.add("nav_headerli");
    if (headerLi.img === "") {
      headerLi.innerHTML = `${objectList[i].title}`;
    } else {
      headerLi.innerHTML = `${objectList[i].img}${objectList[i].title}`;
    }
  }
}
createNav(headerLinks);

const discoverItems = [
  {
    imgURL: `https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg`,
    title: "Wedding",
  },
  {
    imgURL: `https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg`,
    title: "Jewellery",
  },
  {
    imgURL:
      "https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg",
    title: "Clothing",
  },
  {
    imgURL:
      "https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg",
    title: "Home & Living",
  },
  {
    imgURL:
      "https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg",
    title: "Wall" + " " + "Art",
  },
  {
    imgURL:
      "https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg",
    title: "Kitchen & dining",
  },
];

function creatediscover(objectlist) {
  const subComponents = document.querySelector(".subcomponents");
  const subComponentsDiscover = document.createElement("ul");
  subComponents.appendChild(subComponentsDiscover);

  for (let i = 0; i < objectlist.length; i++) {
    console.log(objectlist.length);

    let discoverLi = document.createElement("li");
    subComponentsDiscover.appendChild(discoverLi);
    discoverLi.classList.add("discover_li");

    let discoverimg = document.createElement("img");
    discoverLi.appendChild(discoverimg);
    discoverimg.src = objectlist[i].imgURL;

    let discoverspan = document.createElement("span");
    discoverLi.appendChild(discoverspan);
    discoverspan.innerHTML = objectlist[i].title;
  }
}
creatediscover(discoverItems);

const deals = [
  {
    image: `https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg`,
    span: "Upto 40% off on",
    h3: "Women's Ethnic Clothing",
  },
  {
    image: `https://i.etsystatic.com/32501528/c/1488/1488/0/0/…/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg`,
    span: "Upto 40% off on",
    h3: "Women's Western Clothing",
  },
  {
    image: `https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg`,
    span: "Upto 40% off on",
    h3: "Men's Clothing",
  },
  {
    image: `https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg`,
    span: "Upto 40% off on",
    h3: "Fashion jewellery",
  },
  {
    image: `https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg`,
    span: "Upto 40% off on",
    h3: "Winter Clothing",
  },
  {
    image: `https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg`,
    span: "Upto 40% off on",
    h3: "Wedding Clothing",
  },
];
function dealsoftheday(objectList) {
  const dealsComponent = document.querySelector(".dealscomponent");
  const dealsSubComponent = document.createElement("ul");
  dealsComponent.appendChild(dealsSubComponent);

  for (let i = 0; i < objectList.length; i++) {
    let dealsLi = document.createElement("li");
    dealsSubComponent.appendChild(dealsLi);

    let dealsmaindiv = document.createElement("div");
    dealsLi.appendChild(dealsmaindiv);
    dealsmaindiv.classList.add("deals_maindiv");

    let dealsimg = document.createElement("img");
    dealsmaindiv.appendChild(dealsimg);
    dealsimg.src = objectList[i].image;

    let dealsdiv = document.createElement("div");
    dealsmaindiv.appendChild(dealsdiv);
    dealsdiv.classList.add("deals_div");

    let dealsspan = document.createElement("span");
    dealsdiv.appendChild(dealsspan);
    dealsspan.innerHTML = objectList[i].span;

    let dealsheading = document.createElement("h3");
    dealsdiv.appendChild(dealsheading);
    dealsheading.innerHTML = objectList[i].h3;
  }
}
dealsoftheday(deals);

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
    type: "image",
    videourl: "",
  },
  {
    img: `https://i.etsystatic.com/24512514/r/il/066b08/3699852893/il_340x270.3699852893_pkjb.jpg`,
    h3: "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
    star: `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`,
    starcount: 5,
    rating: "(13,853)",
    price: "",
    actualprice: 1452,
    discount: 50,
    deliverytype: "",
    type: "image",
    videourl: "",
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
    type: "video",
    videourl:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/PAINT_PORTRAIT_ETSY_VIDEO_vo9waf.mp4",
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
    type: "video",
    videourl:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/HFF_Hearts_Video_m6nj4t.mp4",
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
    type: "image",
    videourl: "",
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
    type: "video",
    videourl:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/PB-42_convert-video-online.com_cfle3f.mp4",
  },
];

function popularGiftsofday() {
  const containerGifts = document.querySelector(".container_gifts");
  const giftsComponent = document.createElement("ul");
  giftsComponent.classList.add("gifts_componentul");
  containerGifts.appendChild(giftsComponent);

  for (let i = 0; i < popularGifts.length; i++) {
    const giftsLi = document.createElement("li");
    giftsComponent.appendChild(giftsLi);
    giftsLi.classList.add("gifts_componentli");

    let giftsMainDiv = document.createElement("div");
    giftsLi.appendChild(giftsMainDiv);
    giftsMainDiv.classList.add("gifts_maindiv");

    let imgContainer = document.createElement("div");
    giftsMainDiv.appendChild(imgContainer);
    imgContainer.classList.add("img_container");

    let giftsdiv = document.createElement("div");
    giftsMainDiv.appendChild(giftsdiv);
    giftsdiv.classList.add("gifts_div");

    let giftsheading = document.createElement("h3");
    giftsdiv.appendChild(giftsheading);
    giftsheading.classList.add("gifts_heading");
    giftsheading.innerHTML = popularGifts[i].h3;

    let NumberStar = popularGifts[i].starcount;
    function starRow(NumberStar) {
      if (NumberStar == 5) {
        for (let j = 1; j <= NumberStar; j++) {
          let giftsRating = document.createElement("span");
          giftsdiv.appendChild(giftsRating);

          giftsRating.innerHTML = popularGifts[i].star;
        }
      } else {
        for (let j = 1; j < NumberStar; j++) {
          let giftfourRating = document.createElement("span");
          giftsdiv.appendChild(giftfourRating);

          giftfourRating.innerHTML = popularGifts[i].star;
        }
        let gifthalffourRating = document.createElement("span");
        giftsdiv.appendChild(gifthalffourRating);
        gifthalffourRating.classList.add("star_rating");
        gifthalffourRating.innerHTML = halfstar;
      }
    }
    starRow(NumberStar);

    let starRating = document.createElement("div");
    giftsdiv.appendChild(starRating);
    starRating.innerHTML = popularGifts[i].rating;
    starRating.classList.add("star_rating");

    let popularDiv = document.createElement("div");
    giftsdiv.appendChild(popularDiv);
    popularDiv.classList.add("popular_div");

    let newPrice = document.createElement("span");
    popularDiv.appendChild(newPrice);
    newPrice.innerHTML =
      "₹" + rateOfItem(popularGifts[i].actualprice, popularGifts[i].discount);
    newPrice.classList.add("new_price");

    let actualPrice = document.createElement("span");
    popularDiv.appendChild(actualPrice);
    actualPrice.innerHTML = "₹" + popularGifts[i].actualprice;
    actualPrice.classList.add("actual_price");

    let discountValue = document.createElement("span");
    popularDiv.appendChild(discountValue);
    discountValue.innerHTML = "(" + popularGifts[i].discount + "%  off" + ")";
    discountValue.classList.add("discount_price");

    function rateOfItem(actualPrice, discountValue) {
      let newRate;
      newRate = Math.round((actualPrice / 100) * discountValue);

      console.log(newRate);
      return newRate;
    }
    const DeliveryType = document.createElement("span");
    giftsdiv.appendChild(DeliveryType);
    DeliveryType.innerHTML = popularGifts[i].deliverytype;
    DeliveryType.classList.add("free_delivery");

    if (popularGifts[i].type === "video") {
      let giftsvideo = document.createElement("video");
      imgContainer.appendChild(giftsvideo);
      giftsvideo.src = popularGifts[i].videourl;
      giftsvideo.classList.add("gifts_video");

      giftsvideo.addEventListener("mouseenter", () => {
        giftsvideo.autoplay = false;
        giftsvideo.muted = "muted";
        giftsvideo.play();
      });
      giftsvideo.addEventListener("mouseleave", () => {
        giftsvideo.pause();
        giftsvideo.currentTime = 0;
      });
    } else if (popularGifts[i].type === "image") {
      let giftsimg = document.createElement("img");
      imgContainer.appendChild(giftsimg);
      giftsimg.src = popularGifts[i].img;
    }
    let wheartimg = document.createElement("span");
    imgContainer.appendChild(wheartimg);
    wheartimg.classList.add("whiteheart");
    wheartimg.innerHTML = whiteHeartImg;
    let rheartimg = document.createElement("span");

    let  state=0;
    {
      wheartimg.addEventListener("click", () => {

          if(state === 0)
          { 
          console.log("state0")
          wheartimg.innerHTML = redHeartImg;
          state=1
          }
          else {
            wheartimg.innerHTML = whiteHeartImg;
            state=0;
            console.log("state1")
          }
        });
        

      }
  }
}
popularGiftsofday(popularGifts);


const toggles=document.querySelector('.fa-show')
const toggleBtn = document.querySelector('.fa-btn')
console.log("haiiii")

// toggleBtn.forEach(toggleBtn => {
//   console.log("hai")
// })

toggleBtn.forEach (toggle => {
  console.log("hai")
  toggleBtn.addEventListener('click', ()=>{
     toggles.classList.toggle('show')
  })
});



// const chevron = documnet.querySelector('.fas')
// chevron.addEventListener('click',()=>{
//    chevron.classList.add('rotate')
// })
// })

// const navItems=[
// {
//   item:"Shop",
// },
// {
//   item:" Sell",
// },
// {
//   item:"About",
// },
// {
//   item:"Help",
// },
// ]

// const footerNav=document.querySelector('.label_container')

// const footerNavUl = document.createElement("ul");
// footerNavUl.classList.add("footer_navul");
// footerNav.appendChild(footerNavUl);

// for (let k = 0; k < navItems.length; k++) {
//   const footernavli = document.createElement("li");
//   footerNavUl.appendChild(footernavli);
//   footernavli.classList.add("footer_navli");

//   let footeritems = document.createElement("span");
//   footernavli.appendChild(footeritems);
//   footeritems.innerHTML = navItems[k].item;




// }