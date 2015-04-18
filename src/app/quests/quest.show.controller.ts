module questler {
  'use strict';

  interface IQuestScope extends ng.IScope {
    quest
    baseUrl
    events
  }

  export class QuestShowCtrl {
    /* @ngInject */
    constructor ($scope: IQuestScope, Restangular, $stateParams, $cookies) {

      $scope.events = this;

      $scope.baseUrl = 'http://localhost:3000';
      Restangular.one('quests',  $stateParams.id).get().then( responseObject =>
        $scope.quest = responseObject
      );

    }

  }

}
