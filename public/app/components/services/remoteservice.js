'use strict';

/**
 * @ngdoc service
 * @name myApp.remoteService
 * @description
 * Service in the myApp.
 */

angular.module('myApp')
	.service('remoteService', function ($http) {

		// AngularJS will instantiate a singleton by calling "new" on this function
		var self = this;

        this.getInfos = function(name) {
            var request = $http({
                method: "post",
                url: "api/index.cfm",
                params: {
                    action: "add"
                },
                data: {
                    name: name
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }
	});
