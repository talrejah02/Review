import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDwBoyqNxPRapRyHm-aL21TWns8pGbR_Lg",
    authDomain: "review-4433b.firebaseapp.com",
    projectId: "review-4433b",
    storageBucket: "review-4433b.appspot.com",
    messagingSenderId: "996836210848",
    appId: "1:996836210848:web:4c1e862daa2f98e6ab71c5",
    measurementId: "G-GHSQH0RDYE"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const auth= firebase.auth();
  export const firestore=firebase.firestore();
