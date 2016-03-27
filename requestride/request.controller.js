/**
 * Created by pratima on 3/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('RequestController', RequestController);

    RequestController.$inject = ['UserService', '$location','$rootScope', 'FlashService'];
    function RequestController(UserService, $location,$rootScope,FlashService) {
        var vm = this;

        vm.request = rquest;

        (function initController() {
            vm.user=$rootScope.globals.currentUser;

        })();

        function rquest() {

            vm.ride.username=vm.user.username;
            console.log(vm.ride);
            vm.dataLoading = true;
            UserService.ReqRide(vm.ride)
                .then(function (response) {
                    console.log(response);
                    if (response.data.success) {

                      //  FlashService.Success('post successfulddddddddddddddddddddddddd', true);
                        $location.path('/activity');
                    } else {
                        console.log(response.message);
                      //  FlashService.Error(response.data.message);
                        vm.dataLoading = false;
                    }
                });
        }

    }

})();

