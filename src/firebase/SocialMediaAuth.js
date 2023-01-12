// third-party
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// firebase
import { firebaseConfig } from '../config';

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// GoogleAuthProvider
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

// FacebookAuthProvider
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

// Google Sign In
export const GoogleSignIn = async () => {
    return await firebase.auth().signInWithPopup(GoogleAuthProvider);
};

// Facebook Sign In
export const FacebookSignIn = async () => {
    return await firebase.auth().signInWithPopup(FacebookAuthProvider);
};

