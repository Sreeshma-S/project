(function(){
  'use strict';


  // calling app demo module from home.js
  angular.module('app.demo').directive('scrumCard', CardDirective);

  function CardDirective() {
    return {
      templateUrl : '/static/app/card.html',
      restrict : "E",
      controller : ['$scope', '$http', function($scope, $http){
        var url = '/app/cards/' + $scope.card.pk + '/';
        $scope.update = function(){
          $http.put(url, $scope.card)
        }

        $scope.delete = function(){
          $http.delete(url).then(
            function(){
              var cards = $scope.list.cards;
              cards.splice(cards.indexOf($scope.card),1)
            }
          )
        }

        $scope.modelOptions = {
          debounce : 500
        };

      }]
    };
  }
}());
