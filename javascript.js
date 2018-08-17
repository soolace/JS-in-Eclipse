/**
 * javascript file for the check-function
 */
//check the forms
function checkForm() {
	var emailInputField = document.getElementById('i_mail');
	var email = emailInputField.value;
	if (email.length < 4) {
		setError(emailInputField, "email too short");
	} else if (email.search('@') < 1) {
		setError(emailInputField, "invalid email");
	} else {
		clearError(emailInputField);
	}

	var textInputField = document.getElementById('i_name');
	var name = textInputField.value;
	if (name.length < 2) {
		setError(textInputField, "name too short");
	} else {
		clearError(textInputField);
	}

	var textInputField = document.getElementById('i_name2');
	var name2 = textInputField.value;
	if (name2.length < 2) {
		setError(textInputField, "familyname too short");
	} else {
		clearError(textInputField);
	}

	var telInputField = document.getElementById('i_tel');
	var tel = telInputField.value;
	if (tel.length < 10) {
		setError(telInputField, "please enter your phone number");
	} else {
		clearError(telInputField);
	}

	var textInputField = document.getElementById('i_bday');
	var bday = textInputField.value;
	if (bday.length < 10) {
		setError(textInputField, "please enter your birthday");
	} else {
		clearError(textInputField);
	}

}

// setError function
function setError(element, message) {
	var x = document.getElementbyId
	element.parentElement.className = "has-error";
	element.title = message;

}

// clearError function
function clearError(element) {
	element.parentElement.className -= "has-error";
	element.title = "";
}

// change the color of the background-function
function pageBackground() {
	if (document.getElementById('i_name').value == "") {
		document.getElementById('i_name').style.backgroundColor = "#FFC0CB";
	} else {
		document.getElementById('i_name').style.backgroundColor = "#ADFF2F";

	}
	
	if (document.getElementById('i_name2').value == ""){
		document.getElementById('i_name2').style.backgroundColor="#FFC0CB";
	}else {
		document.getElementById('i_name2').style.backgroundColor="#ADFF2F";
		
	}
	
	if (document.getElementById('i_bday').value == ""){
		document.getElementById('i_bday').style.backgroundColor="#FFC0CB";
	}else {
		document.getElementById('i_bday').style.backgroundColor="#ADFF2F";
		
	}
	
	if (document.getElementById('i_tel').value == ""){
		document.getElementById('i_tel').style.backgroundColor="#FFC0CB";
	}else {
		document.getElementById('i_tel').style.backgroundColor="#ADFF2F";
		
	}
	
	if (document.getElementById('i_mail').value == ""){
		document.getElementById('i_mail').style.backgroundColor="#FFC0CB";
	}else {
		document.getElementById('i_mail').style.backgroundColor="#ADFF2F";
		
	}
	
	document.getElementById('i_area').style.backgroundColor="#FFFFF0";
}
