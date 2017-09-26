var filter = {
  "disturbing": false,
  "violence": false,
  "offensive": false,
  "explicit": false,
  "notification" : false
};

chrome.storage.sync.get("filter", function(data) {
  filter = data.filter || {
    "disturbing": false,
    "violence": false,
    "offensive": false,
    "explicit": false,
    "notification" : false
  };
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  chrome.storage.sync.get("filter", function(data) {
    filter = data.filter;
  });
});

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var filterValues = getFilterValues();
    if(filterValues != '') {
      var found = false;
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'Content-Filter') {
          details.requestHeaders[i] = filterValues;
          found = true;
          break;
        }
      }
      if(!found) {
        details.requestHeaders.push({
          "name": "Content-Filter",
          "value": filterValues
        })
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);

function getFilterValues() {
  var filterValues = ''
  for (var key in filter) {
    if (filter.hasOwnProperty(key) && filter[key] === true) {
      filterValues += key + ",";
    }
  }
  return filterValues.replace(/,(\s+)?$/, '');
}

