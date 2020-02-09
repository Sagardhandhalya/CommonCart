let currentLocation = window.location.href;


if (
  currentLocation.includes(
    "hash=fla045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18"
  )
) {

  // var data = document.all[0].querySelectorAll('div.PaJLWc');

  // //[0].innerText;

  // console.log(data);

  chrome.storage.local.set({

      "am-name": "Flipkart Cart",
      "am-de1": "Product 1",
      "am-de2": "Product 2"

    },
    function () {
      console.log("a done");
    });

}

if (
  currentLocation.includes(
    "hash=ama045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18"
  )
) {

  // var data = document.all[0].querySelectorAll('div.PaJLWc');

  // //[0].innerText;

  // console.log(data);

  chrome.storage.local.set({

      "fm-name": "Amazon Cart",
      "fm-de1": "Product 1",
      "fm-de2": "Product 2"

    },
    function () {
      console.log("a done");
    });

}


if (
  currentLocation.includes(
    "paytmmall"
  )
) {

  // var data = document.all[0].querySelectorAll(".nrX_");
  // // (".PaJLWc");
  // console.log(data);
  // console.log(document.querySelectorAll("div._3ycxrs._2Rwa71"));
  chrome.storage.local.set({

    "pm-name": "Paytm Cart",
    "pm-de1": "Product 1",
    "pm-de2": "Product 2"

  }, function () {
    console.log("p done");
  });

}