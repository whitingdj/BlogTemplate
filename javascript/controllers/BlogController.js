(function() {
    var blogger = angular.module("Blog");
    
    var BlogController = function($scope, $routeParams, $sce, blogPostDataService, blogSearchService) {
        
        $scope.post = null;
        $scope.blogPosts = null;
        $scope.postId = $routeParams.id;
        $scope.searchType = 'meta';
        
        var onGetPostSuccess = function(data) {
            $scope.blogPosts = data;
            for (var p in $scope.blogPosts) {
                $scope.blogPosts[p].Content = $sce.trustAsHtml($scope.blogPosts[p].Content);
                if ($routeParams.id) {      
                    if ($scope.blogPosts[p].Id == $routeParams.id) {
                        $scope.post = $scope.blogPosts[p];
                        $scope.previous = $scope.post.Id - 1 > 0 ? $scope.post.Id - 1 : null;
                        $scope.next = $scope.post.Id + 1 <= $scope.blogPosts.length ? $scope.post.Id + 1 : null;
                    }
                }
            }
        };
        
        var onGetPostFailure = function(reason) {
            $scope.error = "Failed to load blog post data: " + reason;
        };
        
        $scope.search = function(type) {
            $scope.searchError = null;
            var results = null;
            
            if(!$scope.searchCriteria) return;
            
            if(type == 'meta') {
                results = blogSearchService.metaSearch($scope.searchCriteria, $scope.blogPosts);
            } else if (type == 'full') {
                results = blogSearchService.fullSearch($scope.searchCriteria, $scope.blogPosts);
            } else {
                $scope.searchError = "search type not found, available search types are meta and full";
                return;
            }
            
            if (results.length > 0) {
                $scope.searchResults = results;
            } else {
                $scope.searchResults = null;
                $scope.searchError = "no results";
            }
        }
        
        blogPostDataService.getAllPosts()
            .then(onGetPostSuccess, onGetPostFailure);
            
    };
    
    blogger.controller("BlogController", ["$scope", "$routeParams", "$sce", "blogPostDataService", "blogSearchService", BlogController]);
})();