var filter = {};
/*
chrome.storage.sync.get("filter", function(data) {
  $scope.filter = data.filter;
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  chrome.storage.sync.get("filter", function(data) {
    $scope.filter = data.filter;
  });
});
*/
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    if(filter != '') {
      var found = false;
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'Content-Filter') {
          details.requestHeaders[i] = filter;
          found = true;
          break;
        }
      }
      if(!found) {
        details.requestHeaders.push({"Content-Filter" : filter})
      }
      return {requestHeaders: details.requestHeaders};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);

