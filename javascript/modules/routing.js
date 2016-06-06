(function() {
    var blogger = angular.module("Blog", ["ngRoute"]);
    
    blogger.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                title: "Postpartum Kicks",
                subtitle: "Find your 10",
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
                title: "About Us",
                subtitle: "Story time! Gather 'round",
                image: "img/about-bg.jpg",
                templateUrl: "views/about.html",
                controller: "BlogController"
            })
            .when("/reviews", {
                title: "Reviews",
                subtitle: "Optimize your mom-arsenal",
                templateUrl: "views/reviews.html",
                image: "img/review-bg.jpg",
                controller: "BlogController"
            })
            .when("/workouts", {
                title: "Workouts",
                subtitle: "Safe, Proven, and Reliable",
                templateUrl: "views/workouts.html",
                image: "img/workout-bg.jpg",
                controller: "BlogController"
            })
            .when("/contact", {
                title: "Contact",
                subtitle: "Hollaaaaaaaaaaa",
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