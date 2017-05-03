
function validateData(){
	// calling to see if the number is a phone number
	if (verifyNumber()){
		// switching frommain contenet to sucess content rather than manipluating dom
		document.getElementById("survery--content").style.display = "none";
		document.getElementById("sucess--contenet").style.display = "inline";	
	}
	else
	{
		// grabbing phone number input, setting background to pink, and border to pink
		var container= document.getElementById("phoneNumber")
		container.style.backgroundColor  = "#FFB2B2";
		container.style.borderColor = "#d00d2d";
		// grabbing phone number label, setting font color to red, and changin text
		document.getElementById("phoneNumber-label").style.color = "#d00d2d";
		document.getElementById("phoneNumber-label").innerHTML= "* Phone Number - invalid phone number";
	}
	// preventing default form action
	return false;
};

function verifyNumber(){
	// grab phone number and run regex, return result
	var number= document.getElementById("phoneNumber").value;
	var regx= /[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/i;
	
	return( number.match(regx))
}
