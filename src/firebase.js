import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDFQjY6Xhy-JvkW4oHT1-SwW0Ov1ahp8o0",
    authDomain: "zipline-f409a.firebaseapp.com",
    databaseURL: "https://zipline-f409a.firebaseio.com",
    projectId: "zipline-f409a",
    storageBucket: "zipline-f409a.appspot.com",
    messagingSenderId: "547250861816"
  };
firebase.initializeApp(config);

export default firebase;
