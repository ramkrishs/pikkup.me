/**
 * Created by pratima on 3/27/2016.
 */
/**
 * Created by pratima on 3/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ActivityController', ActivityController);

    ActivityController.$inject = ['UserService', '$location','$rootScope', 'FlashService'];
    function ActivityController(UserService, $location,$rootScope,FlashService) {
        var vm = this;

        vm.rides = [];
        vm.req=[];
        vm.getRides=getrides;
        vm.getallreq=getallreq;
        (function initController() {
            vm.user=$rootScope.globals.currentUser.username;
            getrides();
            getallreq();
        })();

        function getrides() {

            vm.dataLoading = true;
            UserService.getAllRides(vm.user)
                .then(function (response) {
                    //console.log(response);
                    if (response.data) {

                        vm.rides=response.data;
                        console.log(vm.rides);
                     //   FlashService.Success('post successfulddddddddddddddddddddddddd', true);
                       // $location.path('/activity');
                    } else {
                        console.log(response.message);
                        //FlashService.Error(response.data.message);
                        vm.dataLoading = false;
                    }
                });
        }

        function getallreq() {

            vm.dataLoading = true;
            UserService.getAllReq(vm.user)
                .then(function (response) {
                    console.log(response);
                    if (response.data) {

                        vm.req=response.data;
                        console.log(vm.req);
                        //   FlashService.Success('post successfulddddddddddddddddddddddddd', true);
                        // $location.path('/activity');
                    } else {
                        console.log(response.message);
                        //FlashService.Error(response.data.message);
                        vm.dataLoading = false;
                    }
                });
        }


    }

})();

