angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.currentGames', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/currentGames.html',
        controller: 'currentGamesCtrl'
      }
    }
  })

  .state('tabsController.myAccount', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/myAccount.html',
        controller: 'myAccountCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('ticTacToe', {
    url: '/page7',
    templateUrl: 'templates/ticTacToe.html',
    controller: 'ticTacToeCtrl'
  })

  .state('createAGame', {
    url: '/page8',
    templateUrl: 'templates/createAGame.html',
    controller: 'createAGameCtrl'
  })

  .state('chutesAndLadders', {
    url: '/page9',
    templateUrl: 'templates/chutesAndLadders.html',
    controller: 'chutesAndLaddersCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});