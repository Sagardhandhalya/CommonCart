let urls = ['https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click', 'https://www.amazon.in/gp/cart/view.html?ref_=nav_cart', ]

if (urls.length !== 0) {
  for (const url of urls) {

    let urlName = url;
    window.open(urlName);
  }
}