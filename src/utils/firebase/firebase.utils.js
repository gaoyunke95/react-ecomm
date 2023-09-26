// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU2WiBZwWgHWVZC0AAeMOPgq2Lh_dfaow",
  authDomain: "react-ecomm-5b075.firebaseapp.com",
  projectId: "react-ecomm-5b075",
  storageBucket: "react-ecomm-5b075.appspot.com",
  messagingSenderId: "899303513338",
  appId: "1:899303513338:web:3f6592f7c6b74fbf60fd43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const {displayName, email}  = userAuth;
        const createdDate = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdDate
            });
        }catch (error) {
            console.log('error creating the user', error.message);
        }

        return userDocRef;
    }
}