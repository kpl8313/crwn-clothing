import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfe2ewjrSYbNnc61i82KdtaYuhsEfEizI",
    authDomain: "crwn-clothing-db-6e9f6.firebaseapp.com",
    projectId: "crwn-clothing-db-6e9f6",
    storageBucket: "crwn-clothing-db-6e9f6.appspot.com",
    messagingSenderId: "758998831279",
    appId: "1:758998831279:web:ea2b48b38366420004445a",
    measurementId: "G-5KQ4WSQ2DC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

