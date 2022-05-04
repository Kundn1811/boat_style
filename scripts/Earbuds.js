import { navbar ,footer} from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('footer').innerHTML = footer();
let container=document.getElementById('container')

let poster=document.createElement('img')
    poster.setAttribute('id','poster')
    poster.src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734'
let h1=document.createElement('h1')
    h1.innerText='Wireless Earbuds'
    container.append(poster,h1) 
    fetch("./Data/airpods.json").then(res => res.json()).then(data =>{
        main(data.airpods)
        console.log(data.airpods)
    })

    function main(data){
    data.forEach(function(el){
        let container2=document.getElementById('main')
        let product=document.createElement('div')
    
        let image=document.createElement('img')
            image.src=el.image
        let detailBox=document.createElement('div')
        let rating=document.createElement('p')
            rating.innerText=`* ${el.rating}`
        let title=document.createElement('h4')
            title.innerText=el.title
        let price=document.createElement('p')
            price.innerText=` ₹ ${el.price}`    
            detailBox.append(rating,title,price)    
            product.append(image,detailBox)

            container2.append(product)
    })
       

        
    }

       