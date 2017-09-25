angular.module('mbo-popup', ['ngMaterial'])
.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}])
.controller('AppController', function($scope, $window) {
  $scope.filter = {
    "disturbing": false,
    "violence": false,
    "offensive": false,
    "explicit": false
  };

  chrome.storage.sync.get("filter", function(data) {
    $scope.$apply(function () {
      $scope.filter = data.filter || {
        "disturbing": false,
        "violence": false,
        "offensive": false,
        "explicit": false
      };
    });
  });

  $scope.selectPreferance = function() {
    console.log({"filter" : $scope.filter});
    chrome.storage.sync.set({"filter" : $scope.filter}, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });  
  };
});