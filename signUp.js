import { navbar, footer, menu, more } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()
document.getElementById("menu").innerHTML = menu()
document.getElementById("more").innerHTML = more()
document.getElementById('footer').innerHTML = footer();

let register = async (e) =>{
    e.preventDefault();

    let form_data ={
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
   
    form_data =JSON.stringify(form_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method: "POST",
        body: form_data,
        headers:{
            "Content-Type": "application/json",
        },
    });

    let data =await res.json();
    console.log(data);
};
document.getElementById("submit").addEventListener("click", register);