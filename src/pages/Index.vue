<template>
  <q-page>
    <div class="q-pa-lg">
      <q-card>
        <q-card-section class="bg-secondary text-white">
          <h3>Quasar Firebase Auth Boilerplate</h3>
        </q-card-section>
        <q-card-section>
          <h4>Simple boilerplate with auth all wired up and ready to roll. New users are added to a 'users' collection in Firestore.</h4>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import firebase from 'firebase/app';
export default {
  name: 'PageIndex',
  data () {
    return {
      loggedIn: false
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
}


</script>



