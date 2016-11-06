	$(function(){
    $("#Valider").click(function(){
	if ($("#Nom").val().length <1 || $("#Adresse").val().length <1 || $("#Prenom").val().length <1 || $("#DateDeNaisance").val().length <1 || $("#Mail").val().length <1 ) {
			$("#Modal_error").modal('show');
			$("#Modal_Map").modal('hide');
		}
	else {
			$("#bienvenue").text('Bienvenue '+ $("#Nom").val());
			$("#paragragh").text('Vous êtes nés le '+ $("#DateDeNaisance").val() + ' et vous habitez');
			$("#Modal_Map").modal('show');
			$("#Modal_error").modal('hide');
	}
    });
	});
	
	$( function() {
    $( "#DateDeNaisance" ).datepicker({
               
               dateFormat:"dd/mm/yy",
			   maxDate: "+1d"
               
            }); 
	
	
	
	}
	);