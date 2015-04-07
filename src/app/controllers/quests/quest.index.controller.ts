module questler {
  'use strict';

  interface IQuestScope extends ng.IScope {
    quests
    baseUrl
  }

  export class QuestIndexCtrl {
    /* @ngInject */
    constructor ($scope: IQuestScope, Restangular, $cookies) {

      $scope.baseUrl = 'http://localhost:3000';
      Restangular.all('quests').getList().then( responseObject =>
        $scope.quests = responseObject
      )
      
    }
  }

}
