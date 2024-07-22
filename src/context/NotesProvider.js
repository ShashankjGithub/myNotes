import { useState } from "react";
import  NoteContext  from './NotesContext'

const NoteState = (props) => {
    const host = "http://localhost:4000/";
    const defaultNotes = []
    const [notes, setNotes] = useState(defaultNotes)



    const apiCall = async(methord,url,data) => {
      const response = await fetch(`${host}api/notes/${url}`,{
        method: methord,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4YjZlN2NjZTY4MTg0ODRkYWQyOWU3In0sImlhdCI6MTcyMTYyNDE4Nn0.vw6ezpQOs2-d_F95CI7TK-Cfr1wzsxzspxSEo15cnck"
          },
          body: JSON.stringify(data)
         
      })
      const json = await response.json();
      return json;

    }


   


    const getAllNotes = async() => {
       clearList();
       const json = await apiCall("GET","getAllNotes");
       setNotes((json))
     }

     const clearList = () =>{
      setNotes([]);
     }


    /// Add a Note 
     const addNote = async(note) => {
       note.tag = "Gernal"
       const json = await apiCall("POST","addNote",note)
       setNotes(notes.concat(json))
     }
    /// Delete a Note

    const deleteNote = async(id) => {
      const json = await apiCall("DELETE",`deleteNote/${id}`,)
     // const newNotes = notes.filter((note) => note._id !== id)
      setNotes(json.data)
     }

    /// Edit A Notes

    const updateNoteData = async(id , note) => {
      const json = await apiCall("PUT",`updateNote/${id}`,note)
      setNotes(json.data)

    }



 

    return (
        <NoteContext.Provider value={{notes,addNote,updateNoteData,deleteNote,getAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;