(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.PostRide=PostRide;
        service.getAllRides=getAllRides;
        service.getAllReq=getAllReq;
        service.ReqRide=ReqRide;
        service.getridematches=getridematches;
        service.getreqmatches=getreqmatches;
        return service;

        function GetAll() {
            console.log("getall");
            return $http.get('http://104.131.150.93:8080/PikkupMe/login').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            console.log("getbyid");
            return $http.get('http://104.131.150.93:8080/PikkupMe/login/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            console.log("getbyusername");
            return $http.get('http://104.131.150.93:8080/PikkupMe/login/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            console.log("create");
            console.log(user.email);
            var req = {
                method: 'POST',
                url: 'http://104.131.150.93:8080/PikkupMe/signup',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param({  email:user.email, username: user.username, password: user.password })
            }
            return $http(req)
                .success(function (response) {
                    callback(response);
                    console.log(response);
                });

            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function PostRide(ride) {


            var req = {
                method: 'POST',
                url: 'http://104.131.150.93:8080/PikkupMe/ride',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param({  origin:ride.origin, destination: ride.destin, seats: ride.avaiseats,date:ride.date,username:ride.username })
            }
            console.log(req);
            return $http(req)
                .success(function (response) {
                    callback(response);
                    console.log(response);
                });

            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function ReqRide(ride) {


            var req = {
                method: 'POST',
                url: 'http://104.131.150.93:8080/PikkupMe/request',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param({  origin:ride.origin, destination: ride.destin,date:ride.date,username:ride.username })
            }
            console.log("request : ");
            console.log(req);
            return $http(req)
                .success(function (response) {
                    callback(response);
                    console.log(response);
                });

            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }
        function getAllReq(user) {


            var req = {
                method: 'GET',
                url: 'http://104.131.150.93:8080/PikkupMe/request/'+user,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                //data: $.param({  origin:ride.origin, destination: ride.destin,date:ride.date,username:ride.username })
            }
            // console.log(req);
            return $http(req)
                .success(function (response) {
                    callback(response);
                    console.log(response);
                });

            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function getAllRides(user) {


            var req = {
                method: 'GET',
                url: 'http://104.131.150.93:8080/PikkupMe/ride/'+user,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                //data: $.param({  origin:ride.origin, destination: ride.destin,date:ride.date,username:ride.username })
            }
           // console.log(req);
            return $http(req)
                .success(function (response) {
                    callback(response);
                    console.log(response);
                });

            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function getreqmatches(user) {


            var req = {
                method: 'GET',
                url: 'http://104.131.150.93:8080/PikkupMe/requestmatches/'+user,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                //data: $.param({  origin:ride.origin, destination: ride.destin,date:ride.date,username:ride.username })
            }
            // console.log(req);
            return $http(req)
                .success(function (response) {
                    callback(response);
                    console.log(response);
                });

            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function getridematches(user) {


            var req = {
                method: 'GET',
                url: 'http://104.131.150.93:8080/PikkupMe/ridematches/'+user,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                //data: $.param({  origin:ride.origin, destination: ride.destin,date:ride.date,username:ride.username })
            }
            // console.log(req);
            return $http(req)
                .success(function (response) {
                    callback(response);
                    console.log(response);
                });

            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }


        function Update(user) {
            console.log("update");
            return $http.put('http://104.131.150.93:8080/PikkupMe/login/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            console.log("delete");
            return $http.delete('http://104.131.150.93:8080/PikkupMe/login/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
