import firebase from 'firebase/app';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOj2ST5lYqRF7NTfQXmOHzU8ivkSA4IIg",
    authDomain: "projectcard-ce6b9.firebaseapp.com",
    projectId: "projectcard-ce6b9",
    storageBucket: "projectcard-ce6b9.appspot.com",
    messagingSenderId: "920299971817",
    appId: "1:920299971817:web:89b54889f30db50f943c78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// export Firebase so it can be used elsewhere 
 const FireBase = firebase.initializeApp(firebaseConfig);
export default Firebase;