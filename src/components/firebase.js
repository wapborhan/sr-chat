import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCqAORjSgTgwpVHdgjNJP7yGWnN_Cc-NlI",
    authDomain: "sr-chat4238.firebaseapp.com",
    projectId: "sr-chat4238",
    storageBucket: "sr-chat4238.appspot.com",
    messagingSenderId: "987828222184",
    appId: "1:987828222184:web:9ef9a60a7c8e76fef1715d",
  })
  .auth();
