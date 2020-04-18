chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('Resetting split test groups...');
  chrome.browsingData.remove({
    "origins": ["https://www.finewineandgoodspirits.com"]
  }, {
    "cacheStorage": true,
    "cookies": true,
    "fileSystems": true,
    "indexedDB": true,
    "localStorage": true,
    "pluginData": true,
    "serviceWorkers": true,
    "webSQL": true
  }, () => sendResponse({success: true}));
  return true;
});


chrome.browserAction.onClicked.addListener(() => {
  var newURL = "https://www.finewineandgoodspirits.com";
  chrome.tabs.create({ url: newURL });
});
