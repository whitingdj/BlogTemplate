(function() {
    var blogger = angular.module("Blog");
    
    var BlogController = function($scope, $routeParams, blogPostDataService) {
        
        $scope.post = null;
        $scope.blogPosts = null;
        
        var onGetPostSuccess = function(data) {
            $scope.blogPosts = data;
        };
        
        var onGetPostFailure = function(reason) {
            $scope.error = "Failed to load blog post data: " + reason;
        };
        
        blogPostDataService.getAllPosts()
            .then(onGetPostSuccess, onGetPostFailure);
        
        if( $routeParams.id) {
            for (var p in $scope.blogPosts) {
                if (p.Id == $routeParams.id) {
                    $scope.post = p;
                }
            };
            $scope.PreviousId = $scope.post.Id > 1 ? $scope.post.Id - 1 : 1;
            $scope.NextId = $scope.blogPosts.length < $scope.post.Id ? scope.post.Id + 1 : scope.post.Id;
        }
            
    };
    
    blogger.controller("BlogController", ["$scope", "$routeParams", "blogPostDataService", BlogController]);
})();