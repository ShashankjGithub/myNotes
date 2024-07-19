import { useState } from "react";
import  NoteContext  from './NotesContext'

const NoteState = (props) => {
    const defaultNotes = [
        {
          "_id": "668b603acaa41ba7a0569c6a",
          "user": "668a3e6db9b921a8f22a7c93",
          "title": "Hello",
          "description": "Hello My Name is Shashank",
          "tag": "Gernal,toy",
          "date": "2024-07-08T03:42:50.569Z",
          "__v": 0
        },
        {
          "_id": "6695e98ed5e6d74381879a98",
          "user": "668a3e6db9b921a8f22a7c93",
          "title": "My Notes Title",
          "description": "My Notes Description",
          "tag": "Gernal",
          "date": "2024-07-16T03:31:26.574Z",
          "__v": 0
        }
        
      ]
    const [notes, setnotes] = useState(defaultNotes)
    return (
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;