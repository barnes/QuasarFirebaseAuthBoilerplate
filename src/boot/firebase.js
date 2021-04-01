import firebase from "firebase/app"
import "firebase/firestore" 
import "firebase/auth"
import * as firebaseui from 'firebaseui'



const firebaseConfig = {
    apiKey: "AIzaSyCJoshiVaf-AgUOHhbY7peV---M_lfSHfM",
    authDomain: "tagjournal-63f6a.firebaseapp.com",
    projectId: "tagjournal-63f6a",
    storageBucket: "tagjournal-63f6a.appspot.com",
    messagingSenderId: "342490152202",
    appId: "1:342490152202:web:6cc618c864d562c2678ef3"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore()

export default db