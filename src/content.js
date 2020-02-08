let currentLocation = window.location.href;

console.log("dbfh adss vvbadyvdsaj");
if (
  currentLocation.includes(
    "hash=56a045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18"
  )
) {

  function modifyDOM() {
    //You can play with your DOM here or check URL against your regex
    console.log('Tab script:');
    console.log(document.body);
    return document.body.innerHTML;
  }
  chrome.tabs.executeScript({
    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  }, (results) => {
    //Here we have just the innerHTML and not DOM structure
    console.log('Popup script:')
    console.log(results[0]);
  });
}