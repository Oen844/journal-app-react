
import { createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";



const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({ credentials });
        const { displayName, email, photoURL, uid } = result.user;
        // console.log(user);

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);

        //Todo: actualizar el displayname en firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }

    }
}

export const loginWithLoginEmailPassword = async ({ email, password }) => {

    // sigInWihtEmailAndPassword
    //signInWithEmailAndPassword(auth, email, password);

    try {
        const auth = getAuth();
        const resp = await signInWithEmailAndPassword(auth, email, password);

        const { uid, photoURL, displayName } = resp.user;
        console.log(email, displayName, uid, photoURL);

        return {
            ok: true,
            uid, photoURL, email, displayName
        }


    } catch (error) {
        
        
        return { ok: false, errorMessage: error.message }
    }


}