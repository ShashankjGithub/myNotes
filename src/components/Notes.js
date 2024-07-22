import React, { useContext, useEffect, useRef,useState } from "react";
import notesContext from "../context/NotesContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(notesContext);
  const { notes, getAllNotes,updateNoteData } = context;
  const [note, setNote] = useState({id:"",etitle:"",edescription :""})
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null)

  const updateNote = (currentNote) =>{
     setNote({
      id:currentNote._id,
      etitle:currentNote.title,
      edescription:currentNote.description
      })
     ref.current.click();
  }

  const handelOnChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  const handelUpdateNote = () => {
    console.log(note)
   
    updateNoteData(note.id,
      {
        "title":note.etitle,
        "description":note.edescription
      }
    )
  }




  return (
    <>
      <button
        type="button"
        ref={ref}
      
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap" >
       
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={handelOnChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Descrption
                  </label>
                  <textarea className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handelOnChange}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
                 data-bs-dismiss="modal"
              type="button" className="btn btn-primary" onClick={handelUpdateNote}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h3>Your Notes</h3>
        <div className="container mt-3 ml">
          {
            notes.length === 0 && "No Notes Found Please Add Note"
          }
        </div>
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} updateNoteProps = {updateNote}/>;
        })}
      </div>
    </>
  );
};

export default Notes;
