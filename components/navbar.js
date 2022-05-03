function navbar(){
    return`
    <div id="logo">
    <img src="https://gumlet.assettype.com/swarajya%2F2021-01%2F7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c%2FboAt_logo.jpg?q=75&auto=format%2Ccompress&w=1200" alt="">
</div>
<div id="pages">
    <a href="">Shop</a>
    <a href="">Sail with boat</a>
    <a href="">More</a>
</div>
<div id="elements">
    <input type="text" id="search" placeholder="Search...">
    <i class="fa-solid fa-user"></i>
    <i class="fa-solid fa-gifts"></i>
    <i class="fa-solid fa-cart-shopping"></i>
</div>`
}

function footer(){
    return `
    <div id="footer_body">
    <div>
      <div >
        <img
          src="https://gumlet.assettype.com/swarajya%2F2021-01%2F7a6e91f6-5862-4ac5-bb08-eb5bf2a3e20c%2FboAt_logo.jpg?q=75&auto=format%2Ccompress&w=1200"
          alt="" id="flogo">
      </div>
      <p>Subscribe to email alerts. We promise not to spam your inbox.</p>
      <div id="sub_sec">
        <input type="email" placeholder="Email Address*">
        <button>SUBSCRIBE</button>
      </div>
      <div id="social_media">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin-in"></i>
      </div>
    </div>
    <div>
      <h3>SHOP</h3>
      <p>True Wireless Earbuds</p>
      <p> Wireless Headphones </p>
      <p> Wired Headphones</p>
      <p> Wireless Speakers</p>
      <p> Home Audio</p>
      <p> Mobile Accessories</p>
      <p> Smart Watches</p>
      <p> TRebel</p>
      <p> Misfit</p>
      <p> Gift Card</p>
      <p> Rock In India</p>
      <p> Earn Rs.100</p>
    </div>
    <div>
      <h3>HELP</h3>
      <p> Track Your Order</p>
      <p> Warranty & Support</p>
      <p> Return Policy</p>
      <p> Service Centers</p>
      <p> Bulk Orders</p>
      <p> FAQs</p>
      <p> Why Buy Direct</p>
    </div>
    <div>
      <h3>COMPANY</h3>
     <p> About boAt</p>   
      <p> News</p> 
     <p>Read Our Blog </p> 
     <p>Careers </p> 
     <p>Security </p> 
     <p>Terms of Service </p> 
     <p>Privacy Policy </p> 
     <p>Investor Relations </p> 
    </div>
  </div>
  <div id="footer_bottom"></div>
</div>`;
}
export {navbar,footer};