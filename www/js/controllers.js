angular.module('valedisMag.controllers', [])

        .controller('NewsArticleListCtrl', function ($scope) {
        })
        .controller('NewsArticleDetailCtrl', function ($scope) {
        })

        .controller('CategoriesCtrl', function ($scope, CategoryService) {
            $scope.categories = CategoryService.getCategories();
        })


        .controller('CategoryArticleListCtrl', function ($scope, $stateParams, ArticleService) {
            $scope.categoryId = $stateParams.id;
            $scope.articles = ArticleService.getByCategoryId($stateParams.id); 
        })

        .controller('CategoryArticleDetailCtrl', function ($scope) {
        })
        .controller('ShopCtrl', function ($scope) {
        })
        .controller('OptionsCtrl', function ($scope) {
        });
