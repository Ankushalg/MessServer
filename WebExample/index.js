firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function send(){

  var phoneNum = document.getElementById("num_field").value;
  var message = document.getElementById("message_field").value;
  
  // <Do not replace this code.>
  var rootRef = firebase.database().ref();
  var uID = firebase.auth().currentUser.uid;
  var subRoot = rootRef.child('Messages').child(uID);
  
  var newStoreRef = subRoot.push();
  newStoreRef.set({
    "mMessage" : message,
    "mPhone" : phoneNum
  });
   // </Do not replace this code.>

  document.getElementById("num_field").value = "";
  document.getElementById("message_field").value = "";

}

function addMessage(){
  
}

function logout(){
  firebase.auth().signOut();
}
