import { checkingCredentials } from "./authSlice";


export const chenkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
    }
}