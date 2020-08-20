import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCxXUT6zXYxgIq-r_R0TML7MQM3Tb2_xVw",
  authDomain: "react-6aabc.firebaseapp.com",
  databaseURL: "https://react-6aabc.firebaseio.com",
  projectId: "react-6aabc",
  storageBucket: "react-6aabc.appspot.com",
  messagingSenderId: "1077545621267",
  appId: "1:1077545621267:web:f29433b310a5292e50ece6"
});

const auth = firebase.auth();

export {auth};