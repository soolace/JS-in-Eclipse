/**
 * javascript file for manipulation
 */

function hideshow(){
	var allHTMLTags = new Array();
	
	//Create Array of all HTML Tags
	var allHTMLTags = document.getElementsByTagName("*");
	
	//Loop through all tags using a for loop
	for (i = 0; i <allHTMLTags.length; i++){
		
		//Get all tags with the specified class name
		if (allHTMLTags[i].className =="revhistory"){
			 
			//hide or display the elements
			if (allHTMLTags[i].style.display == "none"){
				allHTMLTags[i].style.display ="";
			} else {
				allHTMLTags[i].style.display = "none";
			}
			}
		}
}