(function() {
    var blogger = angular.module("Blog");
    
    var BlogController = function($scope, $routeParams, blogPostDataService) {
        
        $scope.post = null;
        $scope.blogPosts = null;
        $scope.postId = $routeParams.id;
        
        var onGetPostSuccess = function(data) {
            $scope.blogPosts = data;
            if ($routeParams.id) {
                for (var p in $scope.blogPosts) {
                    if ($scope.blogPosts[p].Id == $routeParams.id) {
                        $scope.post = $scope.blogPosts[p];
                    }
                };
                $scope.PreviousId = $scope.post.Id > 1 ? $scope.post.Id - 1 : 1;
                $scope.NextId = $scope.blogPosts.length < $scope.post.Id ? scope.post.Id + 1 : scope.post.Id;
            }
        };
        
        var onGetPostFailure = function(reason) {
            $scope.error = "Failed to load blog post data: " + reason;
        };
        
        blogPostDataService.getAllPosts()
            .then(onGetPostSuccess, onGetPostFailure);
            
    };
    
    blogger.controller("BlogController", ["$scope", "$routeParams", "blogPostDataService", BlogController]);
})();