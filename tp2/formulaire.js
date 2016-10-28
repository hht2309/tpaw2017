function validation() {
	if(document.getElementById("nom").value.length < 5 ) {
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
		document.getElementById("error").innerHTML="La saisie du nom est obligatoire";
	}
	else if (document.getElementById("prenom").value.length < 5 ) {
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
		document.getElementById("error").innerHTML="La saisie du prenom est obligatoire";
		
	}
	
	else if (document.getElementById("adress").value.length < 5 ) {
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
		document.getElementById("error").innerHTML="La saisie du adress est obligatoire";
	}
	
	
	else if (document.getElementById("email").value.length < 5 ) {
		
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
		
		document.getElementById("error").innerHTML="La saisie du email est obligatoire";
		
	}
	
	else {
		document.getElementById("error").style.display = "none";
		document.getElementById("resultat").style.display = "initial";
		document.getElementById("resultat").innerHTML = "Bienvenue "+ document.getElementById("prenom").value;
	}
	
	
	
}
