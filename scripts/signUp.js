import { navbar, footer, menu, more } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()
document.getElementById("menu").innerHTML = menu()
document.getElementById("more").innerHTML = more()
document.getElementById('footer').innerHTML = footer();

let register = () =>{
    event.preventDefault()
    console.log(1)
   let arr = JSON.parse(localStorage.getItem("credentials"))||[]
    let form_data ={
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
   
arr.push(form_data);
  localStorage.setItem('credentials',JSON.stringify(arr))
  alert("Your account has been created")
  window.location.href = "login.html"
   
};
document.getElementById("form").addEventListener("submit",register)