import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgEvJDcRu2ZbQuhTQWGNdvN2EEqrSD5WY",
    authDomain: "clone-d3d88.firebaseapp.com",
    databaseURL: "https://clone-d3d88.firebaseio.com",
    projectId: "clone-d3d88",
    storageBucket: "clone-d3d88.appspot.com",
    messagingSenderId: "869526618455",
    appId: "1:869526618455:web:22dca3fabfd499a44efe12",
    measurementId: "G-XMY8BEHWFQ"
  };

  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
