(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);

    PostController.$inject = ['UserService', '$location','$rootScope', 'FlashService'];
    function PostController(UserService, $location,$rootScope,FlashService) {
        var vm = this;

        vm.post = postride;

        (function initController() {
            vm.user=$rootScope.globals.currentUser;

        })();

        function postride() {



            vm.ride.username=vm.user.username;
            console.log(vm.ride);
            vm.dataLoading = true;
            UserService.PostRide(vm.ride)
                .then(function (response) {
                    console.log(response);
                    if (response.data.success) {

                        FlashService.Success('post successfulddddddddddddddddddddddddd', true);
                        $location.path('/activity');
                    } else {
                        console.log(response.message);
                        FlashService.Error(response.data.message);
                        vm.dataLoading = false;
                    }
                });
        }

    }

})();

