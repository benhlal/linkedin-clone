// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCbY1mwvQPqYYxkJfqJl9MFDhSgzGjfLrc",
    authDomain: "linkedin-9c08a.firebaseapp.com",
    projectId: "linkedin-9c08a",
    storageBucket: "linkedin-9c08a.appspot.com",
    messagingSenderId: "343239021678",
    appId: "1:343239021678:web:e681a152fd7d99c286827f",
    measurementId: "G-T8Y65R2LN1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}