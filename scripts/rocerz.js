import {navbar,footer} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

// import { data} from "../data/rocerzdaData.js";
//  let rData = data();
//  console.log(rData);

 fetch("./scripts/rocerzdaData.json").then(res=>res.json()).then(res=>{
console.log(res.data)
 })
 fetch("./data/airpods.json").then(res=>res.json()).then(res=>{
     console.log(res.airpods)
 })