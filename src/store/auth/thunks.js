import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login} from "./authSlice";



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
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))
    }
}