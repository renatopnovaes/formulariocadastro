import firebase from "firebase";


var firebaseConfig = {
   apiKey: "AIzaSyB1qn3DFHOvCoTmegdn8WhRFPmfHLrjFaM",
    authDomain: "mirai-ad14b.firebaseapp.com",
    databaseURL: "https://mirai-ad14b-default-rtdb.firebaseio.com",
    projectId: "mirai-ad14b",
    storageBucket: "mirai-ad14b.appspot.com",
    messagingSenderId: "592544590538",
    appId: "1:592544590538:web:ba3015ef75042ad975e233"
  };
  // Initialize Firebase
  var fireDb =  firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
