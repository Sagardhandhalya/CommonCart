let currentLocation = window.location.href;


if (
  currentLocation.includes(
    "hash=fla045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18"
  )
) {

  var data = document.all[0].querySelectorAll("._3vlvU_");
  // (".PaJLWc");
  console.log(data);

  //console.log(document.all[0].querySelectorAll(".PaJLWc"));

  chrome.storage.local.set({

    "am-name": "dbfjfhbx",
    "am-de": "sam"

  }, function () {
    console.log("a done");
  });

}

if (
  currentLocation.includes(
    "hash=pma045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18"
  )
) {


  // console.log(document.querySelectorAll("div._3ycxrs._2Rwa71"));
  chrome.storage.local.set({

    "pm-name": "paytm",
    "pm-de": "paytm done"

  }, function () {
    console.log("p done");
  });

}