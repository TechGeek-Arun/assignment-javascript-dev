(function(angular) {
    'use strict';

    //Initialise the module
    var app=angular.module('myApp', ["chart.js"]);
  
    //web-app controller functionality goes here
    app.controller('myController', function($scope, $http, $interval) {
    
    //Initialise variable to store json data
    var jsonData = null;
    
    //Function which fetch the data from api url
    $scope.getData = function(){
    $http.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
    .success(function(response) {
        console.log("Data Fecthed !!!");
        jsonData=response;
        $scope.updateData();
    }) .error(function () {
        console.error("ERROR: Data is unavailable!!!");
    });
    };

    //Function to update json values to canvas tag in html to create bar chart
    $scope.updateData = function(){

        //Initialize data and label array
        $scope.data = new Array;
        $scope.labels = new Array;
        console.log("Inside Upadte Method!!!");

        //Loop through json data to update USD and name of cryptocurrency
        angular.forEach(jsonData, function (item) {
            $scope.data.push(item.price_usd);
            $scope.labels.push(item.name);
        });
        console.log("name="+ $scope.labels+" , "+"USD="+ $scope.data);
        console.log("Data Upadted!!!");
    };

    //First call to fetch data on load of page
    $scope.getData();

    //Auto refresh of page for every 5 minutes
    $interval(function() {
        console.log("Inside $interval!!!");
        $scope.getData();
        console.log("Interval Called once again!!!");
    }, 300000); 
 
  });

})(window.angular);