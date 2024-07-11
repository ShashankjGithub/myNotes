import { useState , react } from "react";
import {noteContext} from './NotesContext'

const NoteState = (props) => {

    return (
        <noteContext.Provider>
            {props.children}
        </noteContext.Provider>
    );
}