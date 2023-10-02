import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU2WiBZwWgHWVZC0AAeMOPgq2Lh_dfaow",
  authDomain: "react-ecomm-5b075.firebaseapp.com",
  projectId: "react-ecomm-5b075",
  storageBucket: "react-ecomm-5b075.appspot.com",
  messagingSenderId: "899303513338",
  appId: "1:899303513338:web:3f6592f7c6b74fbf60fd43",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) return ;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    const returnedDoc =  await createUserWithEmailAndPassword(auth, email, password); 
    console.log(returnedDoc);

    return returnedDoc;
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    const returnedDoc =  await signInWithEmailAndPassword(auth, email, password); 
    console.log(returnedDoc);

    return returnedDoc;
};

export const signOutAuthUser = async () => {
    await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}