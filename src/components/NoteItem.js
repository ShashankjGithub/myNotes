import React, {useContext,useState} from "react";
import notesContext from "../context/NotesContext";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(notesContext);
  const {deleteNote} = context;
  const handelDeleteNote = () => {
    deleteNote(note._id);
  }
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex flex-row-reverse mt-3 ">
          <i className="fa-solid fa-trash ml-3 " onClick={handelDeleteNote}></i>
          <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
