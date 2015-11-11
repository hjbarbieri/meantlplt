angular.module('app.posts.directives',[]).directive('spbComments',function(Post){
    return {
        restrict: 'AEC',
        scope:{
            postInstance:'='
        },
        replace=true,
        link:function(scope,elem,attrs){
            scope.saveComment=function(){
                var postID=scope.postInstance._id,savedPostInstance={};
            }
        },
        templateUrl:'modules/posts/views/comments.html'
    }
});