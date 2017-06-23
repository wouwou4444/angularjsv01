(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunCheckCOntrollerDI )

    LunCheckCOntrollerDI.$inject = ['$scope'];
    

    function LunCheckCOntrollerDI ($scope){

        $scope.textHolder = null;
        $scope.emptyMessage = null;

        $scope.checkLunch = function () {
            if ($scope.items != null ) {
                var full_list_count = $scope.items.split(",").length;
                $scope.itemList = $scope.items.split(",").filter(notEmpty);
                $scope.count = $scope.itemList.length;
                if ( full_list_count != $scope.count )
                    $scope.emptyMessage = "Empty items removed from list";
                else
                    $scope.emptyMessage = "";
            }
            else {
                $scope.emptyMessage = "";
                $scope.itemList = null;
                $scope.count = null;            
            }
            $scope.textHolder = sayMessage();
            

        }

        var notEmpty = function (str) {
            if ( str.trim() != "")
                return true;
            else
                return false;
        }
        var sayMessage = function () {
            if (  ( $scope.items == null ) )  {
                $scope.messageStyle = {
                    "color": "red"
                };
                $scope.textStyle = {
                    "border": "5px solid red"
                };
                
                return "Please enter data first"

            }
            else if ( $scope.count == 0) {
                $scope.messageStyle = {
                    "color": "red"
                };
                $scope.textStyle = {
                    "border": "5px solid red"
                };

                return "Please enter data first"
            }
            else if ( $scope.count > 0 & $scope.count <= 3 ) {
                $scope.messageStyle = {
                    "color": "green"
                };             
                $scope.textStyle = {
                    "border": "2px solid green"
                };
                return "Enjoy!"
            }
            else {
                $scope.messageStyle = {
                    "color": "green"
                };             
                $scope.textStyle = {
                    "border": "2px solid green"
                };                
                return "Too much!"
            }
        }


    }


})();