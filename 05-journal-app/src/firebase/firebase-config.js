import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAi2CKeuqFp22pcVTyocl7gn-6zqCkUwhw",
  authDomain: "journal-app-8a362.firebaseapp.com",
  projectId: "journal-app-8a362",
  storageBucket: "journal-app-8a362.appspot.com",
  messagingSenderId: "1081494260631",
  appId: "1:1081494260631:web:f288c1236be7c175e852d2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}