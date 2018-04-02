function init_map() {
	var location = new google.maps.LatLng(48.8190372,8.1483531);
 
	var mapoptions = {
		center: location,
		zoom: 14
	};
 
	var marker = new google.maps.Marker({
					position: location,
					title:"Schwabensport Management GmbH"});
 
	var map = new google.maps.Map(document.getElementById("map-container"),				mapoptions);

	marker.setMap(map);	
 
}
 
google.maps.event.addDomListener(window, 'load', init_map);