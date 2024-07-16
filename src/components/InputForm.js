import React from "react";

const InputForm = () => {
  return (
    <div className="my-3">
      <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Your Note Title"
        />
      </div>
      <div className="mb-3">
        <label for="descrption" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="descrption"
          rows="3"
          placeholder="Enter Your Note Description"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary">Add</button>
    </div>
  );
};

export default InputForm;
