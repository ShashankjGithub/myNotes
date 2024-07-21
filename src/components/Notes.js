import React, { useContext } from "react";
import notesContext from "../context/NotesContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(notesContext);
  const { notes} = context;
  return (
    <div className="row">
      <h3>Your Notes</h3>
      {notes.map((note) => {
        return <NoteItem note = {note} key={note._id}  />
      })}
    </div>
  );
};

export default Notes;
