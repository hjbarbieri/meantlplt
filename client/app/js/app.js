'use strict';

angular.module('app', [
'ui.router','app.posts','app.admin','ngResource'
]).run(['$state',function($state){
    $state.go('allPosts');
}]);