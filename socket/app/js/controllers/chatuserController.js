chatApp.controller("chatuserController", function($scope){
    $scope.user = {
        name: ''
    }
    $scope.setUsername = function (text) {
        $scope.user.name = text;
        $scope.data = { visible: true };
    }
})