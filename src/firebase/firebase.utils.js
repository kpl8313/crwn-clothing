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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

// method to be able to take json data and move it into Firebase firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
   
    //batch the calls together
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        // don't pass a param in .doc to let firestore set key value for you
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    // fire off our batch 
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

