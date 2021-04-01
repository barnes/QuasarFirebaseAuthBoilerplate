import firebase from "firebase/app"
// Copy over your Firebase config, rename this file to firebase.js.

import "firebase/firestore" 
import "firebase/auth"



const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore()

export default db