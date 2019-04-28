var map = L.map('map', {
    center: [-41.288,174.777],
    zoom: 14,
//    minZoom: 3,
//    maxZoom: 14,
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//		minZoom: 3,
//      maxZoom: 14,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
}).addTo(map);

var popupButton = document.createElement("BUTTON");

var botanic = L.marker([-41.283,174.767]).addTo(map)
    .bindPopup("<b>Saturday - 13/4/2019</b><br/>A trip to the Botanic Garden<br>"+popupButton);
