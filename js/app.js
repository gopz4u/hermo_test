// JavaScript Document
 var rootApp = angular.module('rootApp', ['myApp1','myApp2']);
 var rootApp = angular.module('detail', ['myApp2','myApp3']);
 
var slides = '';
var app1 = angular.module('myApp1', []);
app1.controller('Mycontrol', function($scope, $http) {
  $http.get("https://api.hermo.my/test/banner")
  .then(function(response) {
      $scope.myWelcome = response.data;
   
	   $.each(response.data, function(ky,valu) {                    
		var img = valu.image;
		
		slides = slides+ '<li><img src="'+img.desktop+'"'+'></li>';
		
		
	 });
	 document.getElementById("slides").innerHTML = slides;
	 
	$('.flexslider').flexslider({
						animation: "fade",
						slideshowSpeed: 4000,
						animationSpeed: 600,
						controlNav: false,
						directionNav: true,
						controlsContainer: ".flex-container" // the container that holds the flexslider
					});
	
  });
});




var app2 = angular.module('myApp2', []);

app2.controller('TableColumnController', function ($scope, $http) {
    $http.get('https://api.hermo.my/test/best-selling',
    {
        params: {
            tablename: "smsn"
        }
    }).
    success(function (data, status, headers, config) {
        $scope.tablecolumns = data;
    }).
    error(function (data, status, headers, config) {
        alert("error!");
    });
});

app2.controller('TableController', function ($scope, $http) {
    $http.get('https://api.hermo.my/test/best-selling').
        success(function (data, status, headers, config) {
            $scope.tables = data;
        }).
        error(function (data, status, headers, config) {
            alert("error!");
        });
});


var app3 = angular.module('myApp3', []);

app3.controller('TableColumnController2', function ($scope, $http) {
    $http.get('https://api.hermo.my/test/product/14921',
    {
        params: {
            tablename: "smsn"
        }
    }).
    success(function (data, status, headers, config) {
        $scope.tablecolumns = data;
    }).
    error(function (data, status, headers, config) {
        alert("error!");
    });
});

app3.controller('TableController2', function ($scope, $http) {
    $http.get('https://api.hermo.my/test/product/14921').
        success(function (data, status, headers, config) {
            $scope.tables = data;
        }).
        error(function (data, status, headers, config) {
            alert("error!");
        });
});




