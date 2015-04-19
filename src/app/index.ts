/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="users/user.controller.ts" />

/// <reference path="quests/quest.index.controller.ts" />
/// <reference path="quests/quest.show.controller.ts" />
/// <reference path="quests/quest.edit.controller.ts" />
/// <reference path="quests/quest.new.controller.ts" />


/// <reference path="components/navbar/navbar.controller.ts" />

module questler {
  'use strict';

  angular.module('questler', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'xeditable', 'monospaced.elastic'])
    .controller('UserCtrl', UserCtrl)
    .controller('QuestIndexCtrl', QuestIndexCtrl)
    .controller('QuestShowCtrl', QuestShowCtrl)
    .controller('QuestEditCtrl', QuestEditCtrl)
    .controller('QuestNewCtrl', QuestNewCtrl)
    .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, RestangularProvider, $cookiesProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHeaders({'X-CSRF-Token': 'QDRkhWX5M76LIbcw38Mt9Q', 'X-CSRF-Param': 'mI1h7eI0CHUKuDpO2qcYyW164874yedGe4epZ0dHol9JWf1nqbOx2ICtN%2FpOtIei52mYcDKHEE07A%2BiKUh77Lw%3D%3D'});


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home.html',
        controller: 'UserCtrl'
      })
      .state('quests', {
        url: '/quests',
        templateUrl: 'app/quests/index.html',
        controller: 'QuestIndexCtrl'
      })
      .state('quest', {
        url: '/quests/:id',
        templateUrl: 'app/quests/show.html',
        controller: 'QuestShowCtrl'
      })
      .state('edit_quest', {
        url: '/quests/:id/edit',
        templateUrl: 'app/quests/edit.html',
        controller: 'QuestEditCtrl'
      })
      .state('new_quest', {
        url: '/quests/new',
        templateUrl: 'app/quests/edit.html',
        controller: 'QuestNewCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/index.html',
        controller: 'UserCtrl'
      })
      ;

    $urlRouterProvider.otherwise('/');
  })
  
  .run(function(editableOptions, editableThemes) {
    // set `default` theme
    editableOptions.theme = 'default';
    // overwrite submit button template
    editableThemes['default'].submitTpl = '<button type="submit">ok</button>';
  });

}
