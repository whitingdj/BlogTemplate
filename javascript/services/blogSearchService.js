(function() {
    var blogSearchService = function () {

        var metaSearch = function(terms) {
            // TODO implement meta search
        };

        var contentSearch = function(terms) {
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