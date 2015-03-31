// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('valedisMag', ['ionic', 'valedisMag.controllers', 'valedisMag.services'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                    // setup an abstract state for the tabs directive
                    .state('tab', {
                        url: "/tab",
                        abstract: true,
                        templateUrl: "templates/tabs.html"
                    })

                    // Each tab has its own nav history stack:

                    .state('tab.news-article-list', {
                        url: '/news-article-list',
                        views: {
                            'tab-news-view': {
                                templateUrl: 'templates/article-list.html',
                                controller: 'NewsArticleListCtrl'
                            }
                        }
                    })

                    .state('tab.news-article', {
                        url: '/news-article-detail/:articleId',
                        views: {
                            'tab-news-view': {
                                templateUrl: 'templates/article-detail.html',
                                controller: 'NewsArticleDetailCtrl'
                            }
                        }
                    })

                    .state('tab.categories', {
                        url: '/categories',
                        views: {
                            'tab-categories-view': {
                                templateUrl: 'templates/categories.html',
                                controller: 'CategoriesCtrl'
                            }
                        }
                    })

                    .state('tab.category-article-list', {
                        url: '/category-article-list/:id',
                        views: {
                            'tab-categories-view': {
                                templateUrl: 'templates/article-list.html',
                                controller: 'CategoryArticleListCtrl'
                            }
                        }
                    })

                    .state('tab.category-article', {
                        url: '/category-article-detail/:articleId',
                        views: {
                            'tab-categories-view': {
                                templateUrl: 'templates/article-detail.html',
                                controller: 'CategoryArticleDetailCtrl'
                            }
                        }
                    })

                    .state('tab.shop', {
                        url: '/shop',
                        views: {
                            'tab-shop-view': {
                                templateUrl: 'templates/shop.html',
                                controller: 'ShopCtrl'
                            }
                        }
                    })

                    .state('tab.options', {
                        url: '/options',
                        views: {
                            'tab-options-view': {
                                templateUrl: 'templates/options.html',
                                controller: 'OptionsCtrl'
                            }
                        }
                    });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/news-article-list');

        });
