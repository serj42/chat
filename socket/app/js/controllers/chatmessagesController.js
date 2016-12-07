chatApp.controller("chatmessagesController", function ($scope) {
    $scope.list = {
        items: [
            {txtmess: 'Вы вошли в чат :'}
    ]
    }
    $scope.addMessage = function (message) {
        if (message != "") 
        {
            var date = new Date();
            var vartime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            $scope.list.items.push({ time: vartime, txtmess: message});
            var quest = angular.element(document.querySelector("#message"));
            quest.val('');
        }
    }
})