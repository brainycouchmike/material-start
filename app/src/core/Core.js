(function(){
    'use strict';
    // Prepare the 'core' module for subsequent registration of controllers and delegates
    angular.
    module('core', [ 'ngMaterial', 'ngRoute' ]).
    controller('CoreController', [
        'coreService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
        /**
        * Core [base] Controller for the BCMS App
        * @param $scope
        * @param $mdSidenav
        * @param avatarsService
        * @constructor
        */
        function(coreService, $mdSidenav, $mdBottomSheet, $log, $q) {
            var self = this;
            coreService.loadCore().
            then(function(core) {
                self.core = core;
            });
        }
    ]).
    service('coreService', [
        '$q', 
        /**
        * Core DataService
        * Uses embedded, hard-coded data model asynchronously
        *
        * @returns {{loadCore: Function}}
        * @constructor
        */
        function($q){
            var core = {
                AppName: "BCMS: Brainy Couch Managment System",
                version: '0.0.1',
                author: "Michael Simoneau <mike@brainycouch.com>"
            };
            return {
              loadCore: function() {
                return $q.when(core);
              }
            };
        }
    ]);
})();
