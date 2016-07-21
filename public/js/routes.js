const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/', {
            templateUrl: 'views/main1.html',
            controller: 'repertoireController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
