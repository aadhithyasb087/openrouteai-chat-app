import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDMxlNY0hdIB4qy1YYqSKlC3c20TKjqw64",
  authDomain: "openrouteai-chat-app.firebaseapp.com",
  projectId: "openrouteai-chat-app",
  storageBucket: "openrouteai-chat-app.appspot.com",
  messagingSenderId: "16195504464",
  appId: "1:16195504464:web:b0a256149726f1b38cc455",
  measurementId: "G-CH5GQ0RRTC",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export  { firestore,auth };
