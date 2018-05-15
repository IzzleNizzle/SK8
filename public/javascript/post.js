// ===========================================
// Post Functions
// ===========================================
// if the trick posts successfully, it will run modal 4, and re-load the page
function postSuccess() {
    $('#modal4').modal();
    $('#modal4').modal('open');
    setTimeout(function () {

        window.location.href = 'post.html';

    }, 3000);
}
// if not,
// run #modal5
function postError(e) {
    $("#errormessage").html(e);
    console.log(e);
    $('#modal5').modal();
    $('#modal5').modal('open');
}
// ===========================================
// Geolocation Code
// ===========================================
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

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
}

$("#postSubmit").on('click', function () {
    event.preventDefault();
    var trick = {
        "title": $("#trickname").val(),
        "user": user.email,
        "lat": lat,
        "long": long,
        "link": $("#tricklink").val()
    }

    $.post("/api/posts", trick)
        .done(function (msg) {
            postSuccess();
        })
        .fail(function (xhr, status, error) {
            postError(xhr);
        });
});