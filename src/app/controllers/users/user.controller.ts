module questler {
  'use strict';

  interface IUserScope extends ng.IScope {
    users
    baseUrl
  }

  export class UserCtrl {
    /* @ngInject */
    constructor ($scope: IUserScope, Restangular) {

      $scope.baseUrl = 'http://localhost:3000';
      $scope.users = Restangular.all('users').getList().$object;
      
    }
  }

}
