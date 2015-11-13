'use strict';

angular.module('app.admin.services',[]).factory('Post',['$resource','API_ENDPOINT', function($resource,API_ENDPOINT){
    return $resource(API_ENDPOINT, {id: '@_id'},{
        update: {
            method: 'PUT'
        }
    })
}]).service('popupService', ['$window',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
}]).value('API_ENDPOINT','http://localhost:3000/api/posts/:id'); 

//'http://localhost:3000/api/posts/:id'
// 'https://mongotest-hjbarbieri.c9.io/api/posts/:id'