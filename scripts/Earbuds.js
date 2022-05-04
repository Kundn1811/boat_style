import { navbar ,footer} from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('footer').innerHTML = footer();
let container=document.getElementById('container')
let poster=document.createElement('img')
    poster.src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734'
let h1=document.createElement('h1')
    h1.innerText='Wireless Earbuds'
    container.append(poster,h1)    