'use strict';

/**
 * @ngdoc service
 * @name myApp.remoteService
 * @description
 * Service in the myApp.
 */

angular.module('myApp')
	.service('remoteService', function ($http) {

		var self = this;
        var base_url = "http://localhost:3001/";

        this.getInfos = function(name) {
            var request = $http({
                method: "get",
                url: base_url + "v1/devices/info",
            });
            return( request.then( handleSuccess, handleError ) );
        }

        /*
        this.getInfos = function(name) {
            var request = $http({
                method: "get",
                url: base_url + "v1/devices/info",
                params: {
                },
                data: {
                    name: name
                }
            });
            return( request.then( handleSuccess, handleError ) );
        }
        */
	});
