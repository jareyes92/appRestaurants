import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDjTwc-ECOf0diutsKj0JjwPWmoITQs0hw",
    authDomain: "apprestaurants-54cdd.firebaseapp.com",
    databaseURL: "https://apprestaurants-54cdd.firebaseio.com",
    projectId: "apprestaurants-54cdd",
    storageBucket: "apprestaurants-54cdd.appspot.com",
    messagingSenderId: "1045997464244",
    appId: "1:1045997464244:web:407658a517c78c64fac5e1"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);



