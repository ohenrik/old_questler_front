module questler {
  'use strict';

  interface IQuestScope extends ng.IScope {
    quest
    baseUrl
    events
    editable
  }

  export class QuestEditCtrl {
    /* @ngInject */
    constructor ($scope: IQuestScope, Restangular, $stateParams, $cookies) {

      $scope.events = this;
      $scope.editable = true;

      $scope.baseUrl = 'http://localhost:3000';
      Restangular.one('quests',  $stateParams.id).get().then( responseObject =>
        $scope.quest = responseObject
      );

    }

    updateQuest(quest) {
      quest.put();
    }

    deleteItem(quest, item) {
      //quest.put();
    }

  }

}
