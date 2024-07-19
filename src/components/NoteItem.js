import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex flex-row-reverse mt-3 ">
          <i className="fa-solid fa-trash ml-3 "></i>
          <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
