(function () {
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunCheckCOntrollerDI )

    LunCheckCOntrollerDI.$inject = ['$scope'];
    

    function LunCheckCOntrollerDI ($scope){
        $scope.item_list = $scope.items;
        $scope.item_list = "Test"
        $scope.textholder = "Bonjour";

        $scope.checkLunch = function () {
            if ($scope.items != null ) {
                $scope.item_list = $scope.items.split(",").filter(notEmpty);
                $scope.count = $scope.item_list.length;
                
            }
            $scope.textholder = sayMessage();
            

        }

        var notEmpty = function (str) {
            if ( str.trim() != "")
                return true;
            else
                return false;
        }
        var sayMessage = function () {
            if ( ($scope.count == 1 & $scope.item_list[0] == "" ) | ( $scope.items == null ) )  {
                return "Please enter data first"

            }
            else if ( $scope.count == 0) {
                return "Please enter data first"
            }
            else if ( $scope.count > 0 & $scope.count <= 3 ) {
                return "Enjoy!"
            }
            else {
                return "Too much!"
            }
        }


    }


})();