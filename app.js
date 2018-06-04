      var app = angular.module("myApp",["ngRoute"]);
        app.config(function($routeProvider){
        $routeProvider
        .when("/Add",{templateUrl : "add.html",controller : "addController"})
        .when("/Edit",{templateUrl : "edit.html",controller : "editController"})
        .when("/Show",{templateUrl : "show.html",controller : "showController"})
        });

        
        app.controller("addController",['$scope','$rootScope','$location',function($scope,$rootScope,$location){
        
        if(!$rootScope.info){
            $rootScope.info = [];
        }
        $scope.add = function(){
            $rootScope.info.push({name : $scope.name, rollNum:$scope.rollNum, nic:$scope.nic});
            $scope.name = '';
            $scope.rollNum ='';
            $scope.nic = '';
            $location.path("/Show");

        };
       
    }]);

    app.controller("editController",['$scope','$rootScope','$location',function($scope,$rootScope,$location){
        
        var information = $rootScope.info[$rootScope.index1];
        $scope.name = information.name;
        $scope.rollNum = information.rollNum;
        $scope.nic = information.nic;
            
        $scope.edit = function(){
            $rootScope.info[$rootScope.index1].name = $scope.name;
            $rootScope.info[$rootScope.index1].rollNum = $scope.rollNum;
            $rootScope.info[$rootScope.index1].nic = $scope.nic;
            $location.path("/Show")
        };
       
    }]);

    app.controller("showController",['$scope','$rootScope','$location',function($scope,$rootScope,$location){

        $scope.edit = function(name){
            
            $rootScope.index1 = getIndex(name);
            $location.path("/Edit");
        }
        
        function getIndex(name){
            for(var i = 0; i < $scope.info.length ; i++){
                if($scope.info[i].name == name)
                    return i;
            }
            return -1;

            
        }
        
    }]);
    
      