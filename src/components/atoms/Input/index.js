import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label">{label}</p>
      <input className="input" placeholder="Form Input" {...rest} />
    </div>
  );
};

export default Input;
