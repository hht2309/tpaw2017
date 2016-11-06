$(document).ready(function () {
    $('#Valider').click(function () {
        if (($("#nom").val().length == 0) || ($("#prenom").val().length == 0) || ($("#naissance").val().length == 0 || ($("#adresse").val().length == 0) || ($("#email").val().length == 0))) {
            $('#Modal1').modal('show');
			$("#Bravo").text("");
			
			
        }
        else {
			$("#Bravo").text("Bravo! Le formulaire est sauvegardé.");	
			
			if (typeof(Storage) !== "undefined") {
			// Store
			localStorage.setItem("Nom", $("#nom").val());
			localStorage.setItem("Prenom", $("#prenom").val());
			localStorage.setItem("Naissance", $("#naissance").val());
			localStorage.setItem("Adresse", $("#adresse").val());
			localStorage.setItem("Email", $("#email").val());
			
			} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
			}
        }
    });

    $('#GPS').click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            $("#adresse").val() = "Geolocation is not supported by this browser.";
        }
    });
    function showPosition(position) {
        $("#adresse").val("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
        $('#image').attr("src", "http://maps.googleapis.com/maps/api/staticmap?markers=" + position.coords.latitude + "," + position.coords.longitude + "&size=500x400&zoom=7");
        $("#CarAdr").text($("#adresse").val().length + " car.");
    }


    $("#naissance").datepicker({
        dateFormat: "dd/mm/yy",
        maxDate: 0,
        onClose: function(){
            $("#CarNai").text($("#naissance").val().length + " car.");
        }
    });



        $("#nom").keyup(function () { $("#CarNom").text($("#nom").val().length + " car."); });
        $("#prenom").keyup(function () { $("#CarPrenom").text($("#prenom").val().length + " car."); });
        $("#naissance").keyup(function () { $("#CarNai").text($("#naissance").val().length + " car."); });
        $("#adresse").keyup(function () { $("#CarAdr").text($("#adresse").val().length + " car."); });
        $("#email").keyup(function () { $("#CarEmail").text($("#email").val().length + " car."); });

    });