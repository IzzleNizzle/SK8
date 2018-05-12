// Initialize Firebase
var config = {
  apiKey: "AIzaSyBAxkuZJ-U_PdwvMx0jo_rw3Wo4t3hGoMk",
  authDomain: "sk8-project.firebaseapp.com",
  databaseURL: "https://sk8-project.firebaseio.com",
  projectId: "sk8-project",
  storageBucket: "sk8-project.appspot.com",
  messagingSenderId: "424545481743"
};
firebase.initializeApp(config);
//shortcut reference for firebase database
var db = firebase.database();


// **************************** USER AUTHENTICATION ********************************

// Variables with user authentication
const auth = firebase.auth();
auth.onAuthStateChanged(firebaseUser => { });

//DOM elements to be adjusted when user is logged in or not
// #btnLogOut
// #btnLogin
// #btnSignUp
// #txtEmail
// #txtPassword
// #userName

// var logOut = document.getElementById("btnLogOut");

// Preparing for user input
var txtEmail;
var txtPassword;
var user;
// import logInError() from './index.js';

// Add login event
$("#btnLogin").on("click", function () {
  event.preventDefault();
  // Get email and pass
  txtEmail = $("#txtEmail").val();
  txtPassword = $("#txtPassword").val();
  // Sign in 
  const promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
  promise
    .then(response => {
      console.log('response', response);
      // run the success modal
      logInSuccess();
      // show the logout button
      $("#btnLogOut").show();
    })
    .catch(e => {
      console.log(e.message)
      console.log('you didnt sign in');
      // run the error modal
      logInError(); 
    });
})

// Add Sign up event
$("#btnSignUp").on("click", function () {
  event.preventDefault();
  // Get email and pass
  txtEmail = $("#txtEmail").val().trim();
  txtPassword = $("#txtPassword").val().trim();
  // Sign up 
  const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPassword);
  promise
  .then(response => {
    console.log('response', response);
    // run the success modal
    logInSuccess();
    // show the logout button
    $("#btnLogOut").show();
  })
  .catch(e => {
    console.log(e.message)
    $("#errormessage").html(e.message);
    console.log('you didnt sign in');
    // run the error modal
    logInError(); 
  });
})



// Add Sign out event
$("#btnLogOut").on("click", function () {
  // Sign out 
  firebase.auth().signOut();
  user = null;
  console.log("test");
  $("#btnLogOut").hide();
  window.location.href = 'index.html';
});




// Add a reatime listener for firebase authentication
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    user = firebaseUser;
    console.log(firebaseUser)
    console.log("is this working?")
    console.log(firebaseUser.email)
    console.log(user.uid + 'this is your uid');
    // console.log(firebaseUser.Kb.I)
    // logOut.classList.remove("hide");
    $("#userName").text("Hi " + firebaseUser.email + "!");

  } else {
    // console notification that the user is not logged in
    console.log('not logged in');

    // links to navbar
    // logOut.classList.add("hide");
    $("#userName").html("<a href='/'>Hi! Click to Log In</a>");
  }

});


// **************************** END USER AUTHENTICATION ********************************