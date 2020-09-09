import firebase, { initializeApp } from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

//for documentation
//https://firebase.google.com/docs/auth/web/google-signin

const config = {
    apiKey: "AIzaSyAlxRQ_dc7-WejxBWsanixwE3QUpjZTzyk",
    authDomain: "m-brand-db.firebaseapp.com",
    databaseURL: "https://m-brand-db.firebaseio.com",
    projectId: "m-brand-db",
    storageBucket: "m-brand-db.appspot.com",
    messagingSenderId: "850165313399",
    appId: "1:850165313399:web:9654b9ffb465527b81fb72",
    measurementId: "G-BER54VZRQS"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
