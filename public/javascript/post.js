var long;
var lat;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

getLocation();

function showPosition(position){
    lat = position.coords.latitude;
    long = position.coords.longitude;
}

$("#postSubmit").on('click', function(){
console.log('test');

var trick = {
    "title": $("#trickname").val(),
    "user": user.email,
    "lat": lat,
    "long": long,
    "link": $("#tricklink").val()
}
console.log(trick);

$.post("/api/posts", trick);

});
