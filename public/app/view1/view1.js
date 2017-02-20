'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function(remoteService) {

    console.log("test");

    remoteService.getInfos().then((data)=>{
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });

    $scope.sendCommand = function(answer) {
        socket.emit('vote', {answer: answer});
        console.log("vote " + answer);
    };

}]);
