import firebase from 'firebase'

if (!firebase.apps.length) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBWhfl2SwYkdQt8qZ4kxgDwH_8lpM21e48",
    authDomain: "leccafe-nuxt-firebase-chat.firebaseapp.com",
    databaseURL: "https://leccafe-nuxt-firebase-chat.firebaseio.com",
    projectId: "leccafe-nuxt-firebase-chat",
    storageBucket: "leccafe-nuxt-firebase-chat.appspot.com",
    messagingSenderId: "1050388390938"
  };
  firebase.initializeApp(config);}

export default firebase
