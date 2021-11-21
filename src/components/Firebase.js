
import firebase from 'firebase';



// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDRRAAabvVXa4MOjdyHq_E5ATqH7P2KDjk",
    authDomain: "profilecard-4ed40.firebaseapp.com",
    projectId: "profilecard-4ed40",
    storageBucket: "profilecard-4ed40.appspot.com",
    messagingSenderId: "560267549953",
    appId: "1:560267549953:web:f970ef1d499dc793f8cf00"
};
// Initialize Firebase
firebase.initializeApp(config);

var db=firebase.database();
console.log(db)
export default db;


