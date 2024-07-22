import React, {useContext,useState} from "react";
import notesContext from "../context/NotesContext";

const InputForm = () => {
  const context = useContext(notesContext);
  const { addNote } = context;

  const [note, setNote] = useState({title:"",description :""})
  const handelAddNote = async() => {
   await addNote(note)
   setNote({title:"",description :""})


  }

  const handelOnChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }



  return (
    <div className="my-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={note.title}
          placeholder="Enter Your Note Title"
          onChange={handelOnChange}
          minLength={2}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          value={note.description}
          name="description"
          placeholder="Enter Your Note description"
          onChange={handelOnChange}
          minLength={5}
          required
        ></textarea>
      </div>
      <button 
      disabled = {note.title.length < 5 || note.description.length < 5}
      type="button" className="btn btn-primary" onClick={handelAddNote}>Add Note</button>
    </div>
  );
};

export default InputForm;
