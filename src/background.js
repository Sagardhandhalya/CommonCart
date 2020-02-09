// /* eslint-disable no-undef */
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.runtime.onMessage.addListener(request => {
//     if (request.script == "load data") {
//       chrome.tabs.onUpdated.addListener(tabId => {
//         chrome.tabs.executeScript(
//           tabId, {
//             file: "src/loaddata.js"
//           },
//           () => {
//             chrome.runtime.reload();
//             chrome.tabs.remove(tabId);
//           }
//         );
//       });
//     }
//   });
// });