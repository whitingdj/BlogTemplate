(function() {
    var blogger = angular.module("Blog", ["ngRoute"]);
    
    blogger.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                title: "Home",
                image: "img/home-bg.jpg",
                templateUrl: "views/home.html",
                controller: "BlogController"
            })
            .when("/post/:id", {
                title: "Post",
                image: "img/post-bg.jpg",
                templateUrl: "views/post.html",
                controller: "BlogController"
            })
            .when("/about", {
                title: "About",
                image: "img/about-bg.jpg",
                templateUrl: "views/about.html",
                controller: "BlogController"
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
                title: "All Posts",
                image: "img/all-bg.jpg",
                templateUrl: "views/allPosts.html",
                controller: "BlogController"
            })
            .otherwise({
                redirectTo: "/"
            })
    });
})();