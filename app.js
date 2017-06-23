(function () {
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
                    "border": "5px solid red",
                    "color": "red"
                };
                return "Please enter data first"

            }
            else if ( $scope.count == 0) {
                $scope.messageStyle = {
                    "border": "5px solid red",
                    "color": "red"
                };
                return "Please enter data first"
            }
            else if ( $scope.count > 0 & $scope.count <= 3 ) {
                $scope.messageStyle = {
                    "border": "2px solid green",
                    "color": "green"
                };             
                return "Enjoy!"
            }
            else {
                $scope.messageStyle = {
                    "border": "2px solid green",
                    "color": "green"
                };                
                return "Too much!"
            }
        }


    }


})();