import React, {useContext,useState} from "react";
import notesContext from "../context/NotesContext";

const InputForm = () => {
  const context = useContext(notesContext);
  const { addNote} = context;

  const [note, setNote] = useState({title:"",descrption :""})
  const handelAddNote = () =>{
    addNote(note)
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
          placeholder="Enter Your Note Title"
          onChange={handelOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descrption" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="descrption"
          rows="3"
          name="descrption"
          placeholder="Enter Your Note Description"
          onChange={handelOnChange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handelAddNote}>Add Note</button>
    </div>
  );
};

export default InputForm;
