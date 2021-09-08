import React from "react";

const SelectInput = ({ name, label, error, ...options }) => {
  let option = options.map((option) => (
    <option value={option.value}>{option.label}</option>
  ));
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="userType">
          {label}
        </label>
      </div>
      <select name={name} class="custom-select">
        <option value="" selected>
          Choose...
        </option>
        {option}
      </select>
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default SelectInput;
