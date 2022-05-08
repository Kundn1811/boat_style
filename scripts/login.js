import { navbar, footer, menu, more } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()
document.getElementById("menu").innerHTML = menu()
document.getElementById("more").innerHTML = more()
document.getElementById('footer').innerHTML = footer();

<<<<<<< HEAD


let login = async () => {
    let user_data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    user_data = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    let email = document.getElementById('email').value;
    getUserDetail(email, data.token);
    console.log(data);
  };

  document.getElementById("submit").addEventListener("click", login);

  let getUserDetail = async (email, token) => {
    console.log("here");
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await res.json();
  console.log("user data: ", data);
};
=======
let data = JSON.parse(localStorage.getItem("credentials"))

let login =  () => {
  event.preventDefault();

    let  email= document.getElementById("email").value;
    let  password=document.getElementById("password").value;
    
    var check = false;
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        if (data[i].email == email && data[i].pass == password) {
            check = true;
         }
     }
     if (check) {
         alert("Login successfull")
         
         window.location.href = "index.html";
     }else{
         alert("login failed  ");
         document.getElementById("email").value;
         password=document.getElementById("password").value;
     }
     
};
document.getElementById("form").addEventListener("submit",login)
>>>>>>> 74652b72dc27944b47f2c265672cd957a7bcabaa
