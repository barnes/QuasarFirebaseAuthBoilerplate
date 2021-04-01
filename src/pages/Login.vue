<template>
  <q-page>
    <q-card>
      <q-card-section>
        <section class="firebaseui-auth-container"></section>
        <section id="loader">Loading...</section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import db from '../boot/firebase'

export default {
  name: 'Login',
  mounted() {
    let userObject = {
        uid: ''
    }

    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            var user = authResult.user;
            console.log(user);
            userObject.uid = user.uid;
            db.collection("users").doc(user.uid).set({active: true})
                .then((docRef) => {
                    console.log("Document written")
                })
                .catch((error) => {
                    console.error("Error adding document: ", error)
            });
            var credential = authResult.credential;
            var isNewUser = authResult.additionalUserInfo.isNewUser;
            console.log(isNewUser);
            var providerId = authResult.additionalUserInfo.providerId;
            var operationType = authResult.operationType;
          return false;
        },
        uiShown: function() {
          document.getElementById('loader').style.display = 'none';
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    ui.start('.firebaseui-auth-container', uiConfig);

  }
}
</script>

<style>
@import "https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css";
</style>
