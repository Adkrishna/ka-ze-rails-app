var marker;
var latitude;
var longitude;

function set_initial_location() {
	latitude = $('#incident_latitude').val();
	longitude = $('#incident_longitude').val();
	// if the attributes are already set then go ahead and show the map
	if (latitude) {
		show_map();
	}
	// otherwise do a geolocation and then show the map
	else {
		navigator.geolocation.getCurrentPosition(post_geolocate);
	}	
}

function post_geolocate(position) {
	latitude = position.coords.latitude;
	$('#incident_latitude').val(latitude);
	longitude = position.coords.longitude;
	$('#incident_longitude').val(longitude);			
	show_map();
}

function show_map() {
	var readOnly = Boolean($('#incident_readonly').val());
	L.mapbox.accessToken = 'pk.eyJ1IjoibWFsYXRhc2kiLCJhIjoiZWVlMGIwNTdkM2QzYzMyMzJlYzNlNzc3ZThmYTQ5MzIifQ.Wot8Oy7PsFlLec8QjqoozA';
	var map = L.mapbox.map('map', 'mapbox.streets');
	map.setView([latitude, longitude], 16);
	set_up_marker(latitude, longitude, map, readOnly);
}

function set_up_marker(latitude, longitude, map, readOnly) {
	marker = L.marker([latitude, longitude], {
		icon: L.mapbox.marker.icon({
			'marker-color': '#8EC400'
		}),
		draggable: !readOnly
	}).addTo(map);

	marker.on('dragend', ondragend);

}

function ondragend() {
	var m = marker.getLatLng();
	$('#incident_latitude').val(m.lat);
	$('#incident_longitude').val(m.lng);
}

set_initial_location();
