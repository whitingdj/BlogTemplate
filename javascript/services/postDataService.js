(function () {
    var blogPostDataService = function ($http) {

        var getBlogPosts = function () {
            return $http.get("/sources/posts.json")
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getAllPosts: getAllPosts
        };
    }

    var module = angular.module("Blog");
    module.factory("blogPostDataService", blogPostDataService);
}());