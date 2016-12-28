'use strict';

angular.module('appChicoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'btford.socket-io',
    'ngMaterial'
])
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet('action', '../assets/iconsets/action-icons.svg', 24)
            .iconSet('alert', '../assets/iconsets/alert-icons.svg', 24)
            .iconSet('av', '../assets/iconsets/av-icons.svg', 24)
            .iconSet('communication', '../assets/iconsets/communication-icons.svg', 24)
            .iconSet('content', '../assets/iconsets/content-icons.svg', 24)
            .iconSet('device', '../assets/iconsets/device-icons.svg', 24)
            .iconSet('editor', '../assets/iconsets/editor-icons.svg', 24)
            .iconSet('file', '../assets/iconsets/file-icons.svg', 24)
            .iconSet('hardware', '../assets/iconsets/hardware-icons.svg', 24)
            .iconSet('icons', '../assets/iconsets/icons-icons.svg', 24)
            .iconSet('image', '../assets/iconsets/image-icons.svg', 24)
            .iconSet('maps', '../assets/iconsets/maps-icons.svg', 24)
            .iconSet('navigation', '../assets/iconsets/navigation-icons.svg', 24)
            .iconSet('notification', '../assets/iconsets/notification-icons.svg', 24)
            .iconSet('social', '../assets/iconsets/social-icons.svg', 24)
            .iconSet('toggle', '../assets/iconsets/toggle-icons.svg', 24)
            .iconSet('avatar', '../assets/iconsets/avatar-icons.svg', 128);
    })
    .config(function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptor');
    })
    .config(function($mdThemingProvider) {

        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'E1F5FE',
            '100': 'B3E5FC',
            '200': '81D4FA',
            '300': '4FC3F7',
            '400': '29B6F6',
            '500': '03A9F4',
            '600': '039BE5',
            '700': '0288D1',
            '800': '0277BD',
            '900': '01579B',
            'A100': '80D8FF',
            'A200': '40C4FF',
            'A400': '00B0FF',
            'A700': '0091EA',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
            // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('amazingPaletteName')
            // .backgroundPalette('amazingPaletteName')

    })

    .factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
        return {
            // Add authorization token to headers
            request: function(config) {
                config.headers = config.headers || {};
                if ($cookieStore.get('token')) {
                    config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
                }
                return config;
            },

            // Intercept 401s and redirect you to login
            responseError: function(response) {
                if (response.status === 401) {
                    $location.path('/login');
                    // remove any stale tokens
                    $cookieStore.remove('token');
                    return $q.reject(response);
                }
                else {
                    return $q.reject(response);
                }
            }
        };
    })

    .run(function($rootScope, $location, Auth) {
        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function(event, next) {
            Auth.isLoggedInAsync(function(loggedIn) {
                if (next.authenticate && !loggedIn) {
                    event.preventDefault();
                    $location.path('/login');
                }
            });
        });
    });
