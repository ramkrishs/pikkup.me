(function () {
    'use strict';

    angular
        .module('app', ['ngRoute','ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })
            .when('/post', {
                controller: 'PostController',
                templateUrl: 'postride/post.view.html',
                controllerAs: 'vm'
            })
            .when('/request', {
                controller: 'RequestController',
                templateUrl: 'requestride/request.view.html',
                controllerAs: 'vm'
            })
            .when('/activity', {
                controller: 'ActivityController',
                templateUrl: 'activity/activity.view.html',
                controllerAs: 'vm'
            })
            .when('/match', {
                controller: 'MatchController',
                templateUrl: 'match/match.view.html',
                controllerAs: 'vm'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    //function config($stateProvider, $urlRouterProvider) {
    //
    //    //$urlRouterProvider.otherwise('/login');
    //    $stateProvider
    //        .state('/', {
    //            url: '/home',
    //            views: {
    //                "": {
    //                    templateUrl: 'home/home.view.html',
    //                    controller: 'HomeController',
    //                    controllerAs: 'vm'
    //                }
    //            }
    //        })
    //
    //        .state('register', {
    //            url: '/register',
    //            views: {
    //                "": {
    //                    templateUrl: 'register/register.view.html',
    //                    controller: 'RegisterController',
    //                    controllerAs: 'vm'
    //                }
    //            }
    //        })
    //        .state('login', {
    //            url: '/login',
    //            views: {
    //                "": {
    //                    templateUrl: 'login/login.view.html',
    //                    controller: 'LoginController',
    //                    controllerAs: 'vm'
    //                }
    //            }
    //        });


    //}

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });


    }

})();