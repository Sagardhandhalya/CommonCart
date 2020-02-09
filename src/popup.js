var x = document.getElementById("allcart-button");
x.addEventListener('click',
  function handleallcart() {

    let urls = ['https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click',
      'https://www.amazon.in/gp/cart/view.html?ref_=nav_cart',
      'https://www.snapdeal.com/',
      'https://paytmmall.com/cart'
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

    let urls1 = 'https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click@hash=fla045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18';

    chrome.tabs.create({

      url: urls1,
    });
    let urls2 = 'https://paytmmall.com/cart@hash=pma045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18';

    chrome.tabs.create({

      url: urls2,
    });



  });



var q = document.getElementById("load-data");
q.addEventListener('click',
  function loaddata() {

    chrome.storage.local.get(function (val) {
      var x = document.getElementById("data");






      var node = document.createElement("LI"); // Create a <li> node
      var textnode = document.createTextNode(val["am-name"]); // Create a text node
      node.appendChild(textnode);
      x.appendChild(node);

      var node = document.createElement("LI"); // Create a <li> node
      var textnode = document.createTextNode(val["am-de"]); // Create a text node
      node.appendChild(textnode);
      x.appendChild(node);

      var node = document.createElement("LI"); // Create a <li> node
      var textnode = document.createTextNode(val["pm-name"]); // Create a text node
      node.appendChild(textnode);
      x.appendChild(node);

      var node = document.createElement("LI"); // Create a <li> node
      var textnode = document.createTextNode(val["pm-de"]); // Create a text node
      node.appendChild(textnode);
      x.appendChild(node);


    });
  })
//  var jqxhr = $.get("https://www.flipkart.com", function (data) {

//   })
//   .done(function () {
//     alert("second success");
//     var x = document.getElementById("data");

//     var node = document.createElement("LI"); // Create a <li> node
//     var textnode = document.createTextNode(data.text()); // Create a text node
//     node.appendChild(textnode);

//     x.appendChild(node);
//   });




/* eslint-disable-next-line no-unused-vars */