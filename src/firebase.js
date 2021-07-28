import firebase from "firebase";


var firebaseConfig = {
   // Insert here your api key
  };
  // Initialize Firebase
  var fireDb =  firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
