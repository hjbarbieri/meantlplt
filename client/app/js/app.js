'use strict';

angular.module('app', [
'ui.router','app.posts'
]).run(['$state',function($state){
    $state.go('allPosts');
}]);