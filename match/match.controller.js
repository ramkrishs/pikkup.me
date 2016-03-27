/**
 * Created by pratima on 3/27/2016.
 */
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
        .controller('MatchController', MatchController);

    MatchController.$inject = ['UserService', '$location','$rootScope', 'FlashService'];
    function MatchController(UserService, $location,$rootScope,FlashService) {
        var vm = this;

        vm.rides = [];
        vm.req=[];
        vm.getridematches=getridematches;
        vm.getreqmatches=getreqmatches;
        (function initController() {
            vm.user=$rootScope.globals.currentUser.username;
            getridematches();
            getreqmatches();
        })();

        function getridematches() {

            vm.dataLoading = true;
            UserService.getridematches(vm.user)
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

        function getreqmatches() {

            vm.dataLoading = true;
            UserService.getreqmatches(vm.user)
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

