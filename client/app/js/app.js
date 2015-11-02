'use strict';

angular.module('app', [
'ui.router','app.posts','app.admin'
]).run(['$state',function($state){
    $state.go('allPosts');
}]);