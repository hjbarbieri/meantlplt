'use strict';

angular.module('myApp', [
'ui.router','app.posts'
]).run(['$state',function($state){
    $state.go('allPosts');
}]);