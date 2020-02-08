var x = document.getElementById("allcart-button");
x.addEventListener('click',
  function handleallcart() {

    let urls = ['https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click',
      'https://www.amazon.in/gp/cart/view.html?ref_=nav_cart',
      'https://www.snapdeal.com/cart/addToCart'
    ]

    if (urls.length !== 0) {
      for (const url of urls) {

        chrome.tabs.create({
          url: url
        });

      }
    }
  }
);

/* eslint-disable-next-line no-unused-vars */

var y = document.getElementById("search-button");
y.addEventListener('click',
  function handleSearch() {

    var s = document.getElementById("input-box").value;
    let urls = ['https://www.snapdeal.com/search?keyword=', 'https://www.amazon.in/s?k=', 'https://www.flipkart.com/search?q=', 'https://paytm.com/shop/search?q='];

    if (urls.length !== 0) {
      for (const url of urls) {

        let urlName = `${url}+${s}`;


        chrome.tabs.create({
          url: urlName
        });

      }
    }


  }
);

var z = document.getElementById("fetch-data");
z.addEventListener('click',
  function fetchdata() {

    let urls = 'https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click@hash=56a045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18';

    chrome.tabs.create({

      url: urls,
    });
  });

window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
      tabs[0].id, {
        from: 'popup',
        subject: 'DOMInfo'
      },
      // ...also specifying a callback to be called 
      //    from the receiving end (content script).
      setDOMInfo);
  });
});








/* eslint-disable-next-line no-unused-vars */