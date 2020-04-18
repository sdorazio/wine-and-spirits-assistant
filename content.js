(function() {
  function isBadTestGroup() {
    return document.getElementsByTagName('body')[0].innerHTML.indexOf("StoreClosed") !== -1;
  }

  function isSplashPage() {
    return document.getElementsByTagName('body')[0].innerHTML.indexOf("StoreOpen") !== -1;
  }

  if (isSplashPage()) {
    alert("You're in... Enjoy!");
    var shopLink = document.getElementById('WC_ContentAreaESpot_links_3_1');
    if (shopLink) {
      shopLink.click();
    }
    return;
  }

  window.setTimeout(function () {
    if (isBadTestGroup()) {
      chrome.runtime.sendMessage({reset_test_groups: true}, function (response) {
        console.log('Got Response: ' + JSON.stringify(response));
        window.location.reload();
      });
    }
  }, Math.floor(Math.random() * 3000) + 1000);
})();
