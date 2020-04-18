chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('Resetting split test groups...');
  chrome.cookies.getAll({url: "https://www.finewineandgoodspirits.com/"}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
      chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
    }
    console.log(`Reset ${cookies.length} test groups`);
    sendResponse({success: true});
  });
  return true;
});
