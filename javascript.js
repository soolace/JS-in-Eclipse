/**
 * javascript file for the check-function
 */

function checkForm() {
	var emailInputField = document.getElementById('i_mail');
	var email = emailInputField.value;
	if (email.length < 4) {
		setError(emailInputField, "Email too short");
	} else if (email.search('@') < 1) {
		setError(emailInputField, "invalid Email");
	} else {
		clearError(emailInputField);
	}
	
	var textInputField = document.getElementById('i_name');
	var name = textInputField.value;
	if (name.length <2){
		setError(textInputField, "name too short");
	} else{
		clearError(textInputField);
	}
	
	var textInputField = document.getElementById('i_name2');
	var name2 = textInputField.value;
	if (name2.length <2){
		setError(textInputField, "name too short");
	} else{
		clearError(textInputField);
	}


}

// setError function
function setError(element, message) {
	var x = document.getElementbyId
	element.parentElement.className = "has-error";
	element.title= message;
	
}

// clearError function
function clearError(element) {
	element.parentElement.className -= "has-error";	
	element.title= "";
}
