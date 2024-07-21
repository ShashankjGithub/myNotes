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
        },
        {
          "_id": "6695ewewe98ed5e6d74381879a98",
          "user": "668a3e6db9b921a8f22a7c93",
          "title": "My Notes Title",
          "description": "My Notes Description",
          "tag": "Gernal",
          "date": "2024-07-16T03:31:26.574Z",
          "__v": 0
        },
        {
          "_id": "6695e98ed5787sad87sde6d74381879a98",
          "user": "668a3e6db9b921a8f22a7c93",
          "title": "My Notes Title",
          "description": "My Notes Description",
          "tag": "Gernal",
          "date": "2024-07-16T03:31:26.574Z",
          "__v": 0
        },
        {
          "_id": "6695ewewe78wq97e4we5698ed5e6d74381879a98",
          "user": "668a3e6db9b921a8f22a7c93",
          "title": "My Notes Title",
          "description": "My Notes Description",
          "tag": "Gernal",
          "date": "2024-07-16T03:31:26.574Z",
          "__v": 0
        },
        {
          "_id": "6695e98ed52323dgfo78e6d74381879a98",
          "user": "668a3e6db9b921a8f22a7c93",
          "title": "My Notes Title",
          "description": "My Notes Description",
          "tag": "Gernal",
          "date": "2024-07-16T03:31:26.574Z",
          "__v": 0
        }
        
      ]
    const [notes, setNotes] = useState(defaultNotes)
    /// Add a Note 
     const addNote = (note) => {
      let r = (Math.random() + 1).toString(36).substring(2);
       const n =  {
        "_id": r,
        "user": "668a3e6db9b921a8f22a7c93",
        "title": note.title,
        "description": note.descrption,
        "tag": "Gernal",
        "date": "2024-07-16T03:31:26.574Z",
        "__v": 0
      }
       setNotes(notes.concat(n))
     }
    /// Delete a Note

    const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note._id !== id)
      setNotes(newNotes)
     }

    /// Edit A Notes

    const updateNote = (id , note) => {
      notes.forEach(element => {
        if(element._id === id){
          element.title = note.title
          element.description = note.description
        }
      });

    }



 

    return (
        <NoteContext.Provider value={{notes,addNote,updateNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;