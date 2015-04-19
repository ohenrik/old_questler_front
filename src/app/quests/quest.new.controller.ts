module questler {
  'use strict';

  interface IQuestScope extends ng.IScope {
    quest
    baseUrl
    events
    editable
  }

  export class QuestNewCtrl {
    /* @ngInject */
    constructor ($scope: IQuestScope, Restangular, $stateParams, $cookies) {

      $scope.events = this;
      $scope.editable = true;

      $scope.baseUrl = 'http://localhost:3000';
      Restangular.one('quests/new').get().then( responseObject =>
        $scope.quest = responseObject
      );

    }

    updateQuest(quest) {
      quest.save();
    }

    deleteItem(quest, item) {
      //quest.put();
    }

  }

}
