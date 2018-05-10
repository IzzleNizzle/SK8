function initMap() {

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom : 14,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.SATELLITE
  };
  // Draw the map
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // Place the marker
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
}

function geolocateUser() {
  // If the browser supports the Geolocation API
  if (navigator.geolocation)
  {
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else
    document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
}

window.onload = geolocateUser;

}