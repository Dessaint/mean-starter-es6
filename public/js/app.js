angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .service('repertoireService', repertoireService)
        .controller('repertoireController', repertoireController)
        .config(routes)
        ;
