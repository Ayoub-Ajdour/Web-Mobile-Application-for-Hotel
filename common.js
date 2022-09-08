
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
 

$(document).keypress(function(event){
				
	var element = event.target;
	
	if(element.type == "number" || element.type == "tel"){
		
		var key = window.event.keyCode || event.which || event.charCode;
	
		return key <= 31 || (key >= 48 && key <= 57);
	}
});

$(document).on("input", function(event){
				
	var element = event.target;
	
	validateElement(element);
});

function validateElement(element){
	
	if($(element).val() == null || $(element).val().length == 0){
		
		if($(element).attr("required") != null){
			
			return setMessage(element, "Please enter  " + $(element).attr("placeholder"));
		}
	
	}else{
		
		if($(element).hasClass("name")){
			
			if($(element).val().trim().split(" ").length < 2){
				
				return setMessage(element, $(element).attr("placeholder") + " Enter full name ");
			}
		}
		
		if($(element).hasClass("mobile")){
			
			if(!$(element).val().startsWith("07") && !$(element).val().startsWith("06")){
				
				return setMessage(element, $(element).attr("placeholder") + "The number could start with 06 or 07 ");
			}
			
			if($(element).val().length != 10){
				
				return setMessage(element, $(element).attr("placeholder") + "The number must consist of 10 numbers ");
			}
		}
		
		/*if($(element).attr("min") != null){
			
			var min = $(element).attr("min");
			
			if(Number($(element).val()) < Number(min)){
			
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يكون أكبر من أو يساوي " + min);
			}
		}

		if($(element).attr("max") != null){
			
			var max = $(element).attr("max");
			
			if(Number($(element).val()) > Number(max)){
			
				return setMessage(element, $(element).attr("placeholder") + " يجب أن يكون أصغر من أو يساوي " + max);
			}
		}*/
		
		if($(element).hasClass("email")){

			var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if(!expression.test($(element).val())){
				
				return setMessage(element, $(element).attr("placeholder") + "Email sysntaxe is not correcte");
			}
		}
        if($(element).hasClass("Address")){

			if($(element).val().length <3){
				
				return setMessage(element, $(element).attr("placeholder") + "Should have 3 letter ");
			}
		}
		
		
	}
	
	return setMessage(element, null);
}

function setMessage(element, message) {

	if($(element).closest(".form-group").find(".invalid-feedback").length == 0){
		
		$(element).closest(".form-group").append("<div class='invalid-feedback'></div>");
		
	}else{
		
		$(element).closest(".form-group").find(".invalid-feedback").html(message);
	}
	
	if (message != null) {
		
		$(element).removeClass("is-valid");
		$(element).addClass("is-invalid");

	} else {
		
		$(element).removeClass("is-invalid");
		$(element).addClass("is-valid");
	}
	
	return message;
}

function isValidForm() {

	var result = null;
	
	$($(":input").get().reverse()).each(function(){
		
		var message = validateElement($(this));
		
		if(message != null){
			
			result = message;
			
			$(this).focus();
		}
	});
	
	return result;
}

isValidForm();