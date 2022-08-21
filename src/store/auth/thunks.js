import { checkingCredentials } from "./authSlice";


export const chenkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
    }
}