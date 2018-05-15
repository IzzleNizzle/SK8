// ============================================
// The code below is now done in auth.js
// ============================================
// $(document).ready(function(){
//    $( "#profileHeader").html("Welcome " + firebaseUser.email);
//  });

function profileGetAJAX() {
    // GET AJAX call
    $.get('/api/posts/user/' + user.email, function (data, status) {
        printProfile(data);
      });
}



  function printProfile(data) {
    for (var i = 0; i < data.length; i++) {
        var tRow = $("<tr>");
        var tData1 = $("<td>");
        var tData2 = $("<td>");
        
        tData1.text(data[i].title);
        tData2.html('<a href=' + data[i].link + ' target="_blank"> Link </a>')

        tRow.append(tData1);
        tRow.append(tData2);
        $('.trickData').append(tRow);
    }
  }