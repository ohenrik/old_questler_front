/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="controllers/users/user.controller.ts" />

/// <reference path="controllers/quests/quest.index.controller.ts" />
/// <reference path="controllers/quests/quest.edit.controller.ts" />

/// <reference path="controllers/navbar.controller.ts" />

module questler {
  'use strict';

  angular.module('questler', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router'])
    .controller('UserCtrl', UserCtrl)
    .controller('QuestIndexCtrl', QuestIndexCtrl)
    .controller('QuestEditCtrl', QuestEditCtrl)
    .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, RestangularProvider, $cookiesProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHeaders({'X-CSRF-Token': 'QDRkhWX5M76LIbcw38Mt9Q', 'X-CSRF-Param': 'mI1h7eI0CHUKuDpO2qcYyW164874yedGe4epZ0dHol9JWf1nqbOx2ICtN%2FpOtIei52mYcDKHEE07A%2BiKUh77Lw%3D%3D'});


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home/index.html',
        controller: 'UserCtrl'
      })
      .state('quests', {
        url: '/quests',
        templateUrl: 'app/views/quests/index.html',
        controller: 'QuestIndexCtrl'
      })
      .state('new_quest', {
        url: '/quests/:id/edit',
        templateUrl: 'app/views/quests/form.html',
        controller: 'QuestEditCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/views/users/index.html',
        controller: 'UserCtrl'
      })
      ;

    $urlRouterProvider.otherwise('/');
  })
;
}
