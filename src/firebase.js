// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZkCGyivVGknnzFygt2n71r4yMS3cEc_s",
    authDomain: "linkedin-ee94e.firebaseapp.com",
    projectId: "linkedin-ee94e",
    storageBucket: "linkedin-ee94e.appspot.com",
    messagingSenderId: "22701780742",
    appId: "1:22701780742:web:a8fbbe1b7dc6e1b385b887",
    measurementId: "G-B488HFXZJJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}