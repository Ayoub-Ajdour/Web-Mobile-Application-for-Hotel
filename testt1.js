const firebaseConfig = {
    apiKey: "AIzaSyCC05rGYw8lEsai7vQt-A2c14t7O0XMsdc",
    authDomain: "firstapp-7acda.firebaseapp.com",
    databaseURL: "https://firstapp-7acda-default-rtdb.firebaseio.com",
    projectId: "firstapp-7acda",
    storageBucket: "firstapp-7acda.appspot.com",
    messagingSenderId: "549300940823",
    appId: "1:549300940823:web:76e20d911290cf75bc6c52",
    measurementId: "G-PZYZ84ECL6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var application = angular.module("application", []);

application.controller("controller", 
	
	function($scope) {
		
		$scope.submitted = false;
		
		
		$scope.alert = {class:"alert-info", message:"Please enter the required"};
		$scope.Reserve = new Object();
		
		$scope.saveReserve = function(){
			alert("hello world");
			window.scrollTo(0, 0);
			
			var result = isValidForm();
			
			if(result == null){
				
				$scope.alert = {class:"alert-warning", message:"Stil waiting"};
				
				$scope.submitted = true;
				
				
					
			}else{
				
				$scope.alert = {class:"alert-danger", message:result};
			}
		}
	}
);