import { registerUserWithEmailPassword, singInWithGoogle , loginWithLoginEmailPassword, logoutFirebase} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";


export const chenkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        // console.log({result});
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, displayName, errorMessage} = await loginWithLoginEmailPassword({email, password});

        
        if (!ok) return dispatch(logout({errorMessage}));

        dispatch(login({ uid, displayName, email, photoURL }));  

    }
}

export const startLogout = () => {
    return async( dispach ) => {

        await logoutFirebase();

        dispach( logout() );

    }
}