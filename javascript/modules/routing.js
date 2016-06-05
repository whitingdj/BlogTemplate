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
                title: "Reviews",
                templateUrl: "views/reviews.html",
                image: "img/review-bg.jpg",
                controller: "BlogController"
            })
            .when("/workouts", {
                title: "Workouts",
                templateUrl: "views/workouts.html",
                image: "img/workout-bg.jpg",
                controller: "BlogController"
            })
            .when("/contact", {
                title: "Contact",
                templateUrl: "views/contact.html",
                image: "img/contact-bg.jpg",
                controller: "BlogController"
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