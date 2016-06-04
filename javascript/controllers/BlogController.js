(function() {
    var blogger = angular.module("Blog");
    
    var BlogController = function($scope, $routeParams, $sce, blogPostDataService, blogSearchService) {
        
        $scope.post = null;
        $scope.blogPosts = null;
        $scope.postId = $routeParams.id;
        
        var onGetPostSuccess = function(data) {
            $scope.blogPosts = data;
            if ($routeParams.id) {
                for (var p in $scope.blogPosts) {
                    if ($scope.blogPosts[p].Id == $routeParams.id) {
                        $scope.post = $scope.blogPosts[p];
                        $scope.post.Content = $sce.trustAsHtml($scope.post.Content);
                    }
                };
                $scope.previous = $scope.post.Id - 1 > 0 ? $scope.post.Id - 1 : null;
                $scope.next = $scope.post.Id + 1 <= $scope.blogPosts.length ? $scope.post.Id + 1 : null;
            }
        };
        
        var onGetPostFailure = function(reason) {
            $scope.error = "Failed to load blog post data: " + reason;
        };
        
        var performMetaSearch = function(criteria) {
            var results = blogSearchService.metaSearch(criteria, $scope.blogPosts);
            if (results) {
                $scope.metaSearchResults = results;
            } else {
                $scope.searchError = "no results";
            }
        }
        
        blogPostDataService.getAllPosts()
            .then(onGetPostSuccess, onGetPostFailure);
            
    };
    
    blogger.controller("BlogController", ["$scope", "$routeParams", "$sce", "blogPostDataService", "blogSearchService", BlogController]);
})();