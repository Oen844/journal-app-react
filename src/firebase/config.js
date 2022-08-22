// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLfMRd1Znar1gThdRebGfLPhQM-Vj62ic",
  authDomain: "react-journal-pau.firebaseapp.com",
  projectId: "react-journal-pau",
  storageBucket: "react-journal-pau.appspot.com",
  messagingSenderId: "937149449795",
  appId: "1:937149449795:web:f4ed3bd1e60de7f078f6f6"
};

// Initialize Firebase

export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
