import { navbar,footer } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
let datacome=JSON.parse(localStorage.getItem("details1"))
console.log(datacome)



datacome.map(function(el){
    let img_box=document.createElement("img");
img_box.src=el.image;
let title1=document.createElement("h1");
title1.innerText=el.title;
let desc1=document.createElement("h3");
desc1.innerText=el.desc;
let rating=document.createElement("div");
rating.setAttribute("id","rating")
rating.innerHTML=`<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star-half-stroke"></i>   ${el.rating}`
let box=document.createElement("div");
let price=document.createElement("h2");
price.innerText=`₹ ${el.price}`
let strike=document.createElement("p");
strike.innerText=`₹ ${Number(el.price)*2}`
let save=document.createElement("div");
save.innerHTML="SAVE 50%";
let price_div=document.createElement("div");
price_div.setAttribute("id","price_div")
price_div.append(price,strike,save)
let add_cart=document.createElement("button");
add_cart.addEventListener("click",function(){
    show_data(el);
})
add_cart.setAttribute("id","add_cart")
add_cart.innerHTML="ADD   TO   CART";
let ads=document.createElement("img");
let tax=document.createElement("p");
tax.setAttribute("id","tax")
tax.innerText='Inclusive of all taxes'
let rewards=document.createElement("div");
let rewards_p=document.createElement("h4");
rewards_p.innerText="Get 20% cashback upto Rs. 500 using"
let rewards_img=document.createElement("img");
rewards.setAttribute("id","rewards")
rewards_img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Pay-with-rewards_1.png?v=1643270888";
rewards.append(rewards_p,rewards_img)
ads.setAttribute("id","ads")
ads.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/warranty_usp_1_year_web_9adf807e-d259-4960-ac75-79b36188ad23.png?v=1649579555"

box.setAttribute("id","right_box");
box.append(title1,rating,price_div,tax,rewards,add_cart,ads);
let img_div=document.createElement("div");
img_div.append(img_box)
img_box.setAttribute("id","img_box")
img_div.setAttribute("id","img_div")
document.getElementById("main").append(img_div,box)
let tag_line=document.createElement("p");
tag_line.innerText=`HOME / ${el.title}`;
document.getElementById("tag").append(tag_line)
console.log(tag_line)
let desc_title=document.createElement("h1");
desc_title.innerText=el.title;
let desc=document.createElement("h3");
desc.innerText=el.desc;
document.getElementById("desc").append(desc_title,desc);
let img2_div=document.createElement("div");
let img2=document.createElement("img");
img2.src=el.image3;
let img3=document.createElement("img");
img3.src=el.image2;
let desc2=document.createElement("h1");
desc2.innerText=el.disc2;
img2_div.append(img2,desc2)
document.getElementById("img_div2").append(img2_div)
})
function show_data(el){
    let box=document.createElement("div");
    let img=document.createElement("img");
    let price=document.createElement("h3");
    let title=document.createElement("h3");
   let box2=document.createElement("div");

    title.innerText=el.title;
    img.src=el.image;
    price.innerText=el.price;
    box2.append(title,price)
    box.append(img,box2);
    document.getElementById("not_main").append(box)

}