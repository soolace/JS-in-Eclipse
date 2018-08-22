/**
 * 
 */

function showMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

var showValue = function(val){ 
    document.getElementById('pressed').value = parseInt(val);
}

var randomNumber, input, length = 3, counter = 0;

//do {
//	counter++;
//	if (counter > 1) {
//		length++;
//		counter = 1;
//	}
//	
//	var randomNumber = "";
//	for (var i = 1; i <= length; i++) {
//		randomNumber += Math.floor(Math.random() * 10);
//
//	document.write(randomNumber + "<br>");
//
//} while (randomNumber == input);
//
//var result = length - 1;
//if (result < 3)
//	result = 0;
//document.write("your result is: " + result + "<br> Congratulations ");
//}
