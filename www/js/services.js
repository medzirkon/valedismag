angular.module('valedisMag.services', [])
        .factory('ArticleService', function () {
            var articles = [{
                    id: 0,
                    categoryId: 0,
                    published: '2015-01-01',
                    featured: 1,
                    title: 'Big News 0',
                    intro: 'Did you know?',
                    text: '<p>paragraph with <b>bold text</b></p>',
                    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                }, {
                    id: 1,
                    categoryId: 0,
                    published: '2015-01-01',
                    featured: 0,
                    title: 'News 1',
                    intro: 'What ever it takes',
                    text: '<p>paragraph with <i>italic text</i></p>',
                    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                }, {
                    id: 2,
                    categoryId: 1,
                    published: '2015-01-01',
                    featured: 1,
                    title: 'Fit und schlank',
                    intro: 'Das müssen Sie wissen',
                    text: '<p>paragraph with <u>underline text</u></p>',
                    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                }, {
                    id: 3,
                    categoryId: 1,
                    published: '2015-01-01',
                    featured: 0,
                    title: 'Kohlenhydrate machen fett',
                    intro: 'Pasta - basta',
                    text: '<p>paragraph with <p>another paragraph</p></p>',
                    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                }, {
                    id: 4,
                    categoryId: 2,
                    published: '2015-01-01',
                    featured: 1,
                    title: 'Machen Kinder krank?',
                    intro: 'Das sollten Sie bedenken...',
                    text: '<p>paragraph with <b>bold text</b></p>',
                    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                }];

            return {
                getByCategoryId: function (categoryId) {
                    categoryArticles = [];
                    for (var i = 0; i < articles.length; i++) {
                        if (articles[i].categoryId === parseInt(categoryId)) {
                            categoryArticles.push(articles[i]);
                        }
                    }

                        return categoryArticles;
                    }
                    ,
                            getById: function (articleId) {
                            for (var i = 0; i < articles.length; i++) {
                                if (articles[i].id === parseInt(articleId)) {
                                    return articles[i];
                                }
                            }
                            return null;
                        }
            };
        })

                .factory('CategoryService', function () {
                    var categories = [{
                            id: 0,
                            title: 'News',
                            image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                        }, {
                            id: 1,
                            title: '50+',
                            image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'

                        }, {
                            id: 2,
                            title: 'Für die Familie',
                            image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                        }, {
                            id: 3,
                            title: 'Unbekanntes Thema',
                            image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                        }];

                    return {
                        getCategories: function () {
                            return categories.slice(1, 4); // just for testing
                        },
                        getNews: function () {
                            return categories[0]; // just for testing
                        }
                    };
                });

