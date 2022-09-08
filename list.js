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
	
	function($scope,$window) {
		
		
		$scope.alert = {class:"alert-warning", message:"Please wait"};
		$scope.Client = new Object();
		$scope.show=true;
		/*
		firebase.database().ref("students").once("value").then(function(snapshot){
			
			$scope.alert = {class:"d-none", message:null};
			
			$scope.students = snapshot.val();
			$scope.$digest();
		});
		*/	
		$scope.hello = function(){
			console.log("hey");
			alert("je");
		}
		
		firebase.database().ref("Client").on("child_added", function(data){
			//alert("hey");
			$scope.alert = {class:"d-none", message:null};
			
			$scope.Client[data.key] = data.val();
			
			$scope.$digest();
		});
		
		firebase.database().ref("Client").on("child_changed", function(data){
			
			$scope.Client[data.key] = data.val();
			
			$scope.$digest();
		});
        


		$scope.Client = new Object();
		$scope.saveClientEdit=function(Clientt){
			alert("e")
			alert(phone+"  " + name);
		}
		$scope.editClient= function($Name,$Phone,$email,$Address){
			console.log($scope.show);
			$scope.show=true;
			/*
			$scope.nameEdit="hey";

			firebase.database().ref("Client").on("child_added", function(data){
				//alert("hey");
				$scope.alert = {class:"d-none", message:null};
				if($scope.Client.Phone==$Phone){
				$scope.Client[data.key] = data.val();
				
				$scope.$digest();
			}
			});
			
			firebase.database().ref("Client").on("child_changed", function(data){
				if($scope.Client.Phone==$Phone){
					$scope.Client[data.key] = data.val();
					
					$scope.$digest();
				}
			});


//////////////////////////////////////

			
			$scope.Client = new Object();
		//	alert(" email is "+$Name+$email);
			$scope.Client.Name=$Name;
			$scope.Client.Phone=$Phone;
			$scope.Client.email=$email;
			$scope.Client.Address=$Address;
		//	alert($scope.Client.Name);
			$scope.Client[data.key] = data.val();
			
			$scope.$digest();*/


			var Phone=$Phone;
/*
			$scope.nameEdit = {value:"he"};
			$scope.phoneEdit = {value:$Phone};
			$scope.emailEdit = {value:$email};
			$scope.AddressEdit = {value:$Address};
*/
			$scope.Clientt=new Object();
			var namee=$scope.Clientt.Name;
			var phonee=$scope.Clientt.Phone;
			var email=$scope.Clientt.email;
			var Address=$scope.Clientt.Address;
			//alert(Phone);


$scope.ClientEdit = [
    {nameEdit:$Name, phoneEdit:$Phone, emailEdit:$email,AddressEdit:$Address},];
/*
	firebase.database().ref('Client/'+$Phone).set({
		Address:'Address',
		Name: "name",
		Phone:010,
		email: "email",
		

	  });*/

		}


		
		$scope.deleteClient = function($Phone) {
			
			firebase.database().ref('Client/'+$Phone).remove();
			

		}
		$scope.ClientEdit = new Object();
		$scope.deleteClientFinal = function(){
			$window.location.reload();
		}
		$scope.saveClientEditt = function($nameEdit,$phoneEdit,$emailEdit,$AddressEdit){
			firebase.database().ref('Client/'+$phoneEdit).set({
				Address: $AddressEdit,
				Name: $nameEdit,
				Phone: $phoneEdit,
				email: $emailEdit,
				
		
			  });
			  $window.location.reload();
		}

	}
);


////////////////////////////////https://www.youtube.com/watch?v=1Bj80IjBpT4