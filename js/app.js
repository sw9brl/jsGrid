  /**
* Modulo do App
*/
var app = angular.module('jsGrid', ['ngTouch', 'ngRoute', 'JSGrid']);

/**
 * Configurando as rotas para  modulo
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Principal
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Paginas
    .when("/grid1", {templateUrl: "partials/grid1.html", controller: "Grid1"})
    
	
	.when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})
	
    // caso contrario 404
    .otherwise({redirectTo: "/404"});
}]);


app.controller('PageCtrl', function (/* $scope, $location, $http */) {

});

app.controller('Grid1', function ( $scope, $location, $http ) {

   $scope.clients = [
        { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
        { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
        { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
        { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
        { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
    ];

	 $scope.countries = [
        { Name: "", Id: 0 },
        { Name: "United States", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "United Kingdom", Id: 3 }
    ];

  $scope.tableOptions = {
	   width: "100%",
        height: "400px",
 
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
 
        data: $scope.clients,
 
        fields: [
            { name: "Name", type: "text", width: 150, validate: "required" },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: $scope.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
            { type: "control" }
        ]
	  
	  
  };
 
});

