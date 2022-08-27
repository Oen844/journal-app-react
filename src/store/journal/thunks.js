import { doc, setDoc, collection} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmpyNote, savingNewNote, setActiveNote } from "./journalSlice";



export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());
        //uid
        const { uid } = getState().auth;


        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmpyNote( newNote ));
        dispatch( setActiveNote( newNote ) );

        

        //dispatch
        //dispatch( new note)
        //



    }
}
