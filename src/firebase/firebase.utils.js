import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgzGQxmHeQ7YhryAoevX-EzaRs3vTNIOc",
    authDomain: "crw-clothing-12508.firebaseapp.com",
    databaseURL: "https://crw-clothing-12508.firebaseio.com",
    projectId: "crw-clothing-12508",
    storageBucket: "crw-clothing-12508.appspot.com",
    messagingSenderId: "911144555753",
    appId: "1:911144555753:web:3b0ab11b783fa7b7990c78",
    measurementId: "G-TV44EQFKFZ"
};
  
firebase.initializeApp( firebaseConfig );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;