(function() {
  function isBadTestGroup() {
    return document.getElementsByTagName('body')[0].innerHTML.indexOf("StoreClosed") !== -1;
  }

  window.setTimeout(function () {
    if (isBadTestGroup()) {
      chrome.runtime.sendMessage({reset_test_groups: true}, function (response) {
        console.log('Got Response: ' + JSON.stringify(response));
        window.location.reload();
      });
    }
  }, 1500);
})();
