(function() {
    var blogSearchService = function () {

        var metaSearch = function(criteria, postData) {
            // TODO refactor, as this is probably the slowest possible way to perform this search
            var results = [];
            for(var term in criteria.toLowerCase().split(" ")) {
                for(var post in postData) {
                    if(post.Keywords.toLowerCase().search(term) > -1 && !results.includes(post)) {
                        results.push(post);
                    }
                }
            };
            return results;
        };

        var contentSearch = function(criteria, postData) {
            // TODO implement content search
        };

        return {
            metaSearch: metaSearch,
            contentSearch: contentSearch
        };

    };

    var module = angular.module("Blog");
    module.factory("blogSearchService", blogSearchService);
})();