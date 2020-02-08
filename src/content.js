// let currentLocation = window.location.href;

// console.log("dbfh adss vvbadyvdsaj");
// if (
//   currentLocation.includes(
//     "hash=56a045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18"
//   )
// ) {

//   chrome.runtime.sendMessage({
//     msg: "something_completed",
//     data: {
//       subject: "Loading",
//       content: "Just completed!"
//     }
//   });

// }

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    var domInfo = {
      total: 5,
      inputs: 10,
      buttons: 12,
    };

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(domInfo);
  }
});