(function() {
    var blogger = angular.module("Blog", ["ngRoute"]);
    
    blogger.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home.html",
                controller: "BlogController"
            })
            .when("/post/:id", {
                templateUrl: "views/post.html",
                controller: "BlogController"
            })
            .when("/about", {
                templateUrl: "views/about.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    });
})();