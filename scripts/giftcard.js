import { navbar ,footer} from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('footer').innerHTML = footer();




let mainbox=document.getElementById("mainwork");
let box1=document.createElement("div");
    box1.setAttribute("id","box1")
         let imagebox=document.createElement("div")
         imagebox.setAttribute("id","imagebox");
                 let img=document.createElement("img");
                 img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-card-5000_612x.png?v=1615270911";
                 img.setAttribute("id","giftimg")
         imagebox.append(img);

         let contentbox=document.createElement("div");
         contentbox.setAttribute("id","contentbox")
    box1.append(imagebox,contentbox);


    // box2
    let box2=document.createElement("div");
    box2.setAttribute("id","box2")
        btnbox=document.createElement("div");
        btnbox.setAttribute("class","btnbox")
             let btn1=document.createElement("div");
             btn1.innerText="Description"
             let btn2=document.createElement("div");
             btn2.innerText="9 Reviews";
        btnbox.append(btn1,btn2);

        descbox=document.createElement("div");
        descbox.setAttribute("class","alldiv1")
            let h2=document.createElement("h2");
            h2.innerText="Let Music Be the Best Gift";
            let para=document.createElement("p");
            para.setAttribute("class","para1")
            para.innerText="Whether fitness or groove sessions, gift your friends and family something that fits one and all! The classist, chic, and fiesty collection of headphones, earphones, speakers and so much more! Let them rule the world with a gift that becomes a fashion statement. "
        descbox.append(h2,para);
     box2.append(btnbox,descbox);


    // Box 3
    let box3=document.createElement("div");
    box3.setAttribute("id","box3")
        let imagediv=document.createElement("div");
        let Gimage=document.createElement("img");
        Gimage.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Image-BK-2.png?v=1604672941";
        Gimage.setAttribute("id","allimage")
        imagediv.append(Gimage);
        let Gdiv=document.createElement("div");
        Gdiv.setAttribute("class","alldiv")
        let heading=document.createElement("h2");
        heading.innerText="Things You Should Know"
        let Gpara=document.createElement("ul");
        Gpara.setAttribute("class","para")
        Gpara.innerText="Gift Card can be redeemed only on www.boat-lifestyle.comboAt Gift Cards are valid for 12 months from the date purchase Once purchased, a gift card cannot be cancelled boAt products bought using boAt gift card cannot be cancelled or returned Products can only be exchanged with another piece of the same product in case a defective item is received"
        Gdiv.append(heading,Gpara);
    box3.append(imagediv,Gdiv)
        


// box4
    let box4=document.createElement("div");
    box4.setAttribute("id","box4")
    let Gimage1=document.createElement("img");
        Gimage1.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/158535011131407578939490airdopes-481-2.png?v=1604672765";
        // Gimage1.setAttribute("class","allimage")
        let Gdiv1=document.createElement("div");
        Gdiv1.setAttribute("class","alldiv")
        let heading1=document.createElement("h2");
        heading1.innerText="A Gift To Get The Party Started"
        let Gpara1=document.createElement("ul");
        Gpara1.setAttribute("class","para")
        Gpara1.innerText="Who doesn’t love speakers? Or something to power their dance sessions? The dopest collection of fitness, travel, and even WFH friendly headphones! All gifts are special, some just get remembered more."
        Gdiv1.append(heading1,Gpara1);
    box4.append(Gdiv1,Gimage1)
        

// box5
    let box5=document.createElement("div");
    box5.setAttribute("id","box5")
    let Gimage2=document.createElement("img");
        Gimage2.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner1_3.png?v=1604671811";
        // Gimage2.setAttribute("class","allimage")
        let Gdiv2=document.createElement("div");
        Gdiv2.setAttribute("class","alldiv")
        let heading2=document.createElement("h2");
        heading2.innerText="The Only Rule Is To Be Limitless"
        let Gpara2=document.createElement("ul");
        Gpara2.setAttribute("class","para")
        Gpara2.innerText="Classy, casual, chic, or funky. Headphones and earphones that speak to every fashion. Let your gift be your friends' style statement."
        Gdiv2.append(heading2,Gpara2);
    box5.append(Gimage2,Gdiv2)
   
// box6
    let box6=document.createElement("div");
    box6.setAttribute("id","box6")
        let lastdiv=document.createElement("div");
        lastdiv.innerText="You may also like"
        lastdiv.setAttribute("id","lastdiv")
        let lastdiv2=document.createElement("div");

    box6.append(lastdiv,lastdiv2)
    mainbox.append(box1,box2,box3,box4,box5,box6);