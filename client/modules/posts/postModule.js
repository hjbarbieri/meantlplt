'use strict';

angular.module('app.posts',['app.posts.controllers','app.posts.services','app.posts.directives']).config(['$stateProvider','$locationProvider', function($stateProvider,$locationProvider){
    $stateProvider.state('allPosts',{
       url:'/posts',
       templateUrl:'modules/posts/views/posts.html',
       controller: 'PostController'
    }).state('singlePost',{
        url:'/posts/:id/:permalink',
        templateUrl:'modules/posts/views/singlePost.html',
        controller:'PostDetailsController'
        
    });
}]);