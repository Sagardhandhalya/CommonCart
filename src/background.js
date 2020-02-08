/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessage.addListener(request => {
    if (request.run == "Run allcart") {
      chrome.tabs.onUpdated.addListener(tabId => {
        chrome.tabs.executeScript(
          tabId, {
            file: "src/get-urls.js"
          },
          () => {
            chrome.runtime.reload();
            chrome.tabs.remove(tabId);
          }
        );
      });
    }
    if (request.run == "Run search") {
      chrome.tabs.onUpdated.addListener(tabId => {
        chrome.tabs.executeScript(
          tabId, {
            file: "src/scripts/search.js"
          },
          () => {
            chrome.runtime.reload();
            chrome.tabs.remove(tabId);
          }
        );
      });
    }
  });
});