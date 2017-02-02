angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('landingPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('currentGamesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myAccountCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ticTacToeCtrl', ['$scope', '$stateParams', 
//
//// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
        $scope.spice = 'very';
// <button ng-click="jalapenoSpicy()">Jalapeño</button>
    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
        var p1gameswon = 0;
        var p2gameswon = 0;
        var tied = 0;
        var winner = "";
        var clickedArray = [];
        var clicksCount = 0;
        var id = 0;
        var value = 0;
        var winArray = [7, 56, 84, 146, 273, 448, 273, 73];
        var currentMarker = "X";
        var playerXscore = 0;
        var playerOscore = 0; 
//        var player1name = prompt("Enter Player 1's Name");
//        var player2name = prompt("Enter Player 2's Name");
//        document.write("<h2 style=' font: bold '>" + player1name + " VS " + player2name);
//        document.getElementById("p1info").innerHTML = player1name + " is " + '<img src = "ov2.png" style ="height:70px; width: 90px" />';
//        document.getElementById("p2info").innerHTML = player2name + " is " + '<img src = "ov2.png" style ="height:70px; width: 90px" />';
//        var currentplayer = player1name;


      $scope.playerMove = function(id, value) {
          // check the TEXT value of the bottm 
          alert(id.innerHTML);
            if (id.innerHTML !== "") {
                alert("Please Choose a different square");
                throw new Error("OPPPSSS");

            }
            // changes the text value to X or O
            changeText(id);
            updateScore(value);

            if (id.innerHTML === "") {
                changeText(id);
                updateScore(value);
            }
            if (currentMarker === "X") {
                check4winner(playerXscore);
            }
            else
            {
                check4winner(playerOscore);
            }
            if (winner !== "") {
                alert("Winner: " + currentplayer);

                document.getElementById("winnerTEXT").innerHTML = currentplayer + " Won the round";
                if (currentMarker === "X") {
                    document.getElementById("p1win").innerHTML = currentplayer + " Won " + p1gameswon + " rounds";
                }
                if (currentMarker === "O") {
                    document.getElementById("p2win").innerHTML = currentplayer + " Won " + p2gameswon + " rounds";
                }
                startNewGame();
            }
            else {
                changePlayer();
            }
            if (clicksCount === 9 & winner === "") {
                alert("TIED !");
                tied++;
                document.getElementById("tie").innerHTML = "Tied rounds : " + tied;
                startNewGame();
                throw new Error("OPPPSSS");
            }
            switchPlayers();
        }
       function changeText(id) {
             alert( $scope);
            if (id.innerHTML === "") {
                //  currentMarker;

                clickedArray[clicksCount] = id;
                clicksCount = clicksCount + 1;
                if (currentMarker === "X") {
                    id.innerHTML = '<value = "X" >';


                }
                else {
                    id.innerHTML = '<value = "X" >';
                }

            }
        }
        function updateScore(value) {

            if (currentMarker === "X") {
                playerXscore = playerXscore + value;
            }
            else {
                playerOscore = playerOscore + value;
            }

        }
        function switchPlayers() {

            if (currentMarker === "X") {
                currentMarker = "O";
            }
            else {
                currentMarker = "X";
            }
            document.getElementById("TEXTPLAYER").innerHTML = currentplayer + " Choose a square";
        }
        function check4winner(score) {
            var i;
            for (i = 0; i < winArray.length; i++) {
                if ((winArray[i] & score) === winArray[i]) {
                    if (currentMarker === "X") {
                        winner = "X";
                        p1gameswon = p1gameswon + 1;
                    }
                    else {
                        winner = "O";
                        p2gameswon = p2gameswon + 1;

                    }
                    i = 99;

                }

            }
        }
        function start() {

            currentplayer = player1name;
            document.getElementById("TEXTPLAYER").innerHTML = currentplayer + " Choose a square.";
//            document.getElementById("p1info").innerHTML = player1name + " IS " + '<img src = "xv2.png" style ="height:100px; width: 100px" />';
//            document.getElementById("p2info").innerHTML = player2name + " IS " + '<img src = "ov2.png" style ="height:100px; width: 100px" />';
            document.getElementById("p1win").innerHTML = player1name + " Won " + p1gameswon + " rounds";
            document.getElementById("p2win").innerHTML = player2name + " Won " + p1gameswon + " rounds";
            document.getElementById("tie").innerHTML = "Tied rounds : " + tied;
        }
        function changePlayer() {
            if (currentMarker === "X") {
                currentplayer = player2name;
            }
            else {
                currentplayer = player1name;
            }
        }
        function startNewGame() {
            winner = "";
            playerXscore = 0;
            playerOscore = 0;
            var i = 0;
            for (i = 0; i < clickedArray.length; i++) {
                clickedArray[i].innerHTML = "";
            }
            if (currentplayer === player1name) {
                currentplayer = player2name;
            }
            else {
                currentplayer = player1name;

            }
            clicksCount = 0;
            document.getElementById("TEXTPLAYER").innerHTML = currentplayer + " Choose a square";
        }

}])
 