var application = angular.module("application", []);

application.controller("controller", 
	
	function($scope) {
		
		$scope.submitted = false;
		$scope.alert = {class:"alert-info", message:"Please enter the required"};
		$scope.Client = new Object();
		
		$scope.saveClient = function(){
			$nom=$scope.Client.Name;
			$phone=$scope.Client.Phone;
			$email=$scope.Client.email;
			$address=$scope.Client.Address;
			window.scrollTo(0, 0);
			//alert("nom " + $nom +" phone  "+$phone+"  email  "+$email+" adreess  " +$address)
			var result = isValidForm();
			//alert(result);
			
			if(result == null){
				
				$scope.alert = {class:"alert-warning", message:"Please wait"};
				
				$scope.submitted = true;
				
				firebase.database().ref("Client").child($scope.Client.Phone).set($scope.Client).then(function(){
					
					$scope.alert = {class:"alert-success", message:"Client information has been successfully saved"};
					
					$scope.$digest();
					
				}).catch(function(error){
					
					$scope.submitted = false;
					
					$scope.alert = {class:"alert-danger", message:error};
					
					$scope.$digest();
				});
					
			}else{
				
				$scope.alert = {class:"alert-danger", message:result};
			}
		}
		$scope.editClient= function(){
			$nom=$scope.Client.Name;
			$phone=$scope.Client.Phone;
			$email=$scope.Client.email;
			$address=$scope.Client.Address;
			
		alert("heyyy");
		}
	}
);