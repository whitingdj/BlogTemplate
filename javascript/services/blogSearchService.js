(function() {
    var blogSearchService = function () {

        var metaSearch = function(criteria, postData) {
            // TODO refactor, as this is probably the slowest possible way to perform this search
            var results = [];
            var searchCriteria = criteria.toLowerCase().split(" ");
            for(var term in searchCriteria) {
                for(var post in postData) {
                    if(postData[post].Keywords.toLowerCase().search(searchCriteria[term]) > -1 
                    && !results.includes(postData[post])) {
                        results.push(postData[post]);
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