import {navbar,footer} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

// import { data} from "../data/rocerzdaData.js";
//  let rData = data();
//  console.log(rData);

 fetch("./data/rocerzData.json").then(res=>res.json()).then(res=>{
console.log(res.rocerz)
 })
 fetch("./data/BassHeads.json").then(res=>res.json()).then(res=>{
     console.log(res.bassheads)
 })