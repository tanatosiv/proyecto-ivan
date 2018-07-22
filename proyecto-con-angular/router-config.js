app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "inicio.htm"
    })
    .when("/main", {
        templateUrl : "inicio.htm"
    })
    .when("/quienes-somos", {
        templateUrl : "quienes-somos.htm"
    })
    .when("/proyectos", {
        templateUrl : "proyectos.html"
    })
    .when("/voluntarios", {
        templateUrl : "voluntarios.html"
    })
    .when("/alianzas", {
        templateUrl : "alianzas.html"
    })
    .when("/hazte-voluntario", {
        templateUrl : "hazte-voluntario.html"
    });
});