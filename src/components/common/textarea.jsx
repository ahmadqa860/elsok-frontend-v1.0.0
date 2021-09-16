import React from "react";

const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name} className="form-control" ></textarea>
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default Textarea;
