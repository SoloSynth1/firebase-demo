var firebase = require('firebase');
var firebaseui = require('firebaseui');

var config = {
    apiKey: "AIzaSyCycdRDQf95M8doA-ot2AqBa1k1CI1IYP4",
    authDomain: "usermanagerment.firebaseapp.com",
    databaseURL: "https://usermanagerment.firebaseio.com",
    projectId: "usermanagerment",
    storageBucket: "usermanagerment.appspot.com",
    messagingSenderId: "999225804831"
  };
  firebase.initializeApp(config);

// firebase.auth().createUserAndRetrieveDataWithEmailAndPassword("orixay@hotmail.com", "testing").then((user) => {
//     console.log('created');
//     user.sendEmailVerification().then(function() {
//         console.log('email sent.');
//     }).catch(function(error){
//         console.log(error);
//     });
// }).catch(function(error) {
//     firebase.auth().signInAndRetrieveDataWithEmailAndPassword("orixay@hotmail.com", "testing").then((userCredential) => {
//         console.log(userCredential);
//     });
// });

firebase.database().ref('users/' + fireuser.refreshToken).set({
    email: fireuser.email
  });

firebase.auth().signo



//Google login
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log('Successful');
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log('Unuccessful');
  console.log(error)
  // ...
});