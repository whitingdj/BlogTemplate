(function() {
    var blogger = angular.module("Blog");
    
    var BlogController = function($scope, blogPostDataService) {
        
        var onGetPostSuccess = function(data) {
            $scope.blogPosts = data;
        };
        
        var onGetPostFailure = function(reason) {
            $scope.error = "Failed to load blog post data: " + reason;
        };
        
        blogPostDataService.getAllPosts()
            .then(onGetPostsSuccess, onGetPostsFailure);
            
    };
    
    blogger.controller("BlogController", ["$scope", "blogPostDataService", BlogController]);
})();