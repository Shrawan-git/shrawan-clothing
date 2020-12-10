import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYAfrSBrcofFPN-DFfTvVkBwJGi2B5lgA",
    authDomain: "clothing-db-3958e.firebaseapp.com",
    projectId: "clothing-db-3958e",
    storageBucket: "clothing-db-3958e.appspot.com",
    messagingSenderId: "711166266689",
    appId: "1:711166266689:web:19639be5cb019eca1625c0",
    measurementId: "G-4Z02F84ZNK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;