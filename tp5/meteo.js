window.onload = function () {
	

	
    document.getElementById("Search").addEventListener("click", function () {
		
		if (document.getElementById("city").value.length == 0) {
			document.getElementById("result").style.display = "none";
			$("#Modal_error").modal('show');
			
			
		}
		else {
			document.getElementById("result").style.display = "initial";
			var city = document.getElementById("city").value;
			searchCity(city);
			
		}
		
    });
	
	document.getElementById("GPS").addEventListener("click", function () {
        navigator.geolocation.getCurrentPosition(searchLatLng)
    });
	
}

function searchCity(_city) {
	
	console.log(searchLatLng, 'Hello from ' + _city);

    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + _city + '&units=metric&appid=0bb5f32378f4c71e43767c7fad870bd8', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            //Success!
            			

			var responseJSON = JSON.parse(request.responseText);
			
			var city_found = responseJSON.cod[0];
			
			// Convert UNIX time to ISO format
			var date = new Date(responseJSON.dt*1000);
			var hours = date.getHours();
			var minutes = "0" + date.getMinutes();
			var formattedTime = '@'+hours + ':' + minutes.substr(-2);
			var src_icon = responseJSON.weather[0].icon;
			
			
			
            document.getElementById("cityname").innerHTML=responseJSON.name;
            document.getElementById("time").innerHTML=formattedTime;
            document.getElementById("icon").src="http://openweathermap.org/img/w/"+src_icon+".png";
			
			var str = "0";
			var degree = str.sup();
            document.getElementById("temperature").innerHTML=responseJSON.main.temp+degree;
            document.getElementById("description").innerHTML=responseJSON.weather[0].description;
            document.getElementById("humidity").innerHTML=responseJSON.main.humidity+"%";
            document.getElementById("cloud").innerHTML=responseJSON.clouds.all+"%";
            document.getElementById("wind").innerHTML=responseJSON.wind.speed +" m/s";
			document.getElementById("map").style.visibility = "hidden";
        } else {
            //We reached our target server, bit it returned an error
        }
    };
    request.onerror = function () {
        // There was a connection error of some sort
    };
    request.send();

}

function searchLatLng(position) {
    console.log(searchLatLng, 'Hello from ' + position.coords.latitude + ',' + position.coords.longitude);
	 document.getElementById("city").value="Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;  

    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon=' +position.coords.longitude+ '&units=metric&appid=0bb5f32378f4c71e43767c7fad870bd8', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            //Success!
            var responseJSON = JSON.parse(request.responseText);
			
			// Convert UNIX time to ISO format
			var date = new Date(responseJSON.dt*1000);
			var hours = date.getHours();
			var minutes = "0" + date.getMinutes();
			var formattedTime = '@'+hours + ':' + minutes.substr(-2);
			var src_icon = responseJSON.weather[0].icon;
			
			document.getElementById("result").style.display = "initial";
			
            document.getElementById("cityname").innerHTML=responseJSON.name;
            document.getElementById("time").innerHTML=formattedTime;
            document.getElementById("icon").src="http://openweathermap.org/img/w/"+src_icon+".png";
			
			var str = "0";
			var degree = str.sup();
            document.getElementById("temperature").innerHTML=responseJSON.main.temp+degree;
            document.getElementById("description").innerHTML=responseJSON.weather[0].description;
            document.getElementById("humidity").innerHTML=responseJSON.main.humidity+"%";
            document.getElementById("cloud").innerHTML=responseJSON.clouds.all+"%";
            document.getElementById("wind").innerHTML=responseJSON.wind.speed +" m/s";
			document.getElementById("map").style.visibility = "visible";
            document.getElementById("map").src="http://maps.googleapis.com/maps/api/staticmap?markers="+position.coords.latitude+","+position.coords.longitude+"&size=400x250&zoom=5";

        } else {

        }
    };
    request.onerror = function () {

    };
    request.send();
}

