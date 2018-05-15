function initMap() {

  function geolocationSuccess(position) {
    var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var myOptions = {
      zoom: 14,
      center: userLatLng,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    // Draw the map
    var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
    // Place the marker
    new google.maps.Marker({
      map: mapObject,
      position: userLatLng
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker;

    // GET AJAX call
    $.get('/api/posts', function (data, status) {
      printPosts(data, infowindow, marker);
    });
    // This function is called as a callback on the ajax call and will make map markers for all posts.
    function printPosts(data, infowindow, marker) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].lat, data[i].long);

        marker = new google.maps.Marker({
          position: new google.maps.LatLng(data[i].lat, data[i].long),
          map: mapObject
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infowindow.setContent("" + data[i].title + "<br>" + data[i].link);
            infowindow.open(mapObject, marker);
          }
        })(marker, i));
      }
    }
  }

  function geolocationError(positionError) {
    document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
  }

  function geolocateUser() {
    // If the browser supports the Geolocation API
    if (navigator.geolocation) {
      var positionOptions = {
        enableHighAccuracy: true,
        timeout: 10 * 1000 // 10 seconds
      };
      navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
    }
    else
      document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
  }

  geolocateUser();
}

function profileGetAJAX() {
  console.log('test');
  // GET AJAX call
  $.get('/api/posts/', function (data, status) {
      printMap(data);
    });
}



function printMap(data) {
  for (var i = 0; i < data.length; i++) {
      var tRow = $("<tr>");
      var tData1 = $("<td>");
      var tData2 = $("<td>");
      console.log('test');
      tData1.text(data[i].title);
      tData2.html('<a href=' + data[i].link + ' target="_blank"> Link </a>')

      tRow.append(tData1);
      tRow.append(tData2);
      $('.mapTable').append(tRow);
  }
}




// https://www.taniarascia.com/google-maps-apis-for-multiple-locations/