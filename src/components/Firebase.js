
import firebase from 'firebase';



// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBOj2ST5lYqRF7NTfQXmOHzU8ivkSA4IIg",
    authDomain: "projectcard-ce6b9.firebaseapp.com",
    projectId: "projectcard-ce6b9",
    storageBucket: "projectcard-ce6b9.appspot.com",
    messagingSenderId: "920299971817",
    appId: "1:920299971817:web:89b54889f30db50f943c78"
};
// Initialize Firebase
firebase.initializeApp(config);

var db=firebase.database();
export default db;


