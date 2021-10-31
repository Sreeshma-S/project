// iife function - to activate angular module on visiting this page
(function(){
  'use strict';
  // creating angular module with app name followed by demo, and array of dependencies
  // module object is returned with which we can call controller // calling controller method on module object
  // to pass data from angular to html we need to get access to $scope objects
  angular.module('app.demo', []).controller('scrum', ['$scope', '$http', ScrumController]); // injecting in controller

  function ScrumController($scope, $http){ // added as argument
    $scope.add = function(list, title){
      var card = {
        list : list.pk,
        title : title
      };
      console.log(card)
      $http.post('/app/cards/', card).then(function(response){
        list.cards.push(response.data)
      },
      function(){
          alert('could not create card')
      });
    }

    $scope.data = []
    // async call which returns results immediately, using promise object we call function and get response
    $http.get('/app/lists/').then(function(response){
      $scope.data = response.data;
    });
    // $scope.person is the model
    // $scope.data = [
    //
    // {
    //   name : 'Django Demo',
    //   cards : [
    //     {
    //       title : 'Create Models'
    //     },
    //     {
    //       title : 'Create View'
    //     },
    //     {
    //       title : 'Migrate Database'
    //     },
    //   ]
    // },
    //
    // {
    //   name : 'Angular Demo',
    //   cards : [
    //     {
    //       title : 'Write HTML'
    //     },
    //     {
    //       title : 'Write JS'
    //     },
    //   ]
    // }
    // ]

  }

}());
