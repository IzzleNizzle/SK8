function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

$("#postSubmit").click(function(){

getLocation();

var trick = {
    "title": $("#trickname").val(),
    "user": user.email,
    "lat": position.coords.latitude,
    "long": position.coords.longitude,
    "link": $("#tricklink").val()
}

$.post("/api/posts", trick, callback);


});
