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
            .when("/reviews", {
                templateUrl: "views/reviews.html"
            })
            .when("/workouts", {
                templateUrl: "views/workouts.html"
            })
            .when("/contact", {
                templateUrl: "views/contact.html"
            })
            .when("/all", {
                templateUrl: "views/allPosts.html",
                controller: "BlogController"
            })
            .otherwise({
                redirectTo: "/"
            })
    });
})();