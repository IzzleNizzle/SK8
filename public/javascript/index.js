

// ===========================================
// MODAL CODE
// ===========================================
$(document).ready(function(){
    $('#modal1').modal();
});
// ===========================================
// Login/Sign Up Functions
// ===========================================

// in the auth.js file, it will check:
// if username and password are in the database,
// run #modal2
function logInSuccess(){
  $('#modal2').modal();
  $('#modal2').modal('open');
        setTimeout(function() {

          window.location.href = 'profile.html';
    
        }, 3000);
      }


// if not,
// run #modal3
function logInError(){
  $('#modal3').modal();
  $('#modal3').modal('open');
}

