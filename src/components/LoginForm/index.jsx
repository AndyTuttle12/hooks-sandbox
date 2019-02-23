import React, { useState, useEffect } from "react";
import "./style.css";

const isEnterKey = key => key === "Enter";

const LoginForm = props => {
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [formReset, setFormReset] = useState(false);
  useEffect(() => {
    setUserValue("");
    setPassValue("");
    return () => setFormReset(false);
  }, [formSubmit, formReset]);
  return (
    <div className="login-form">
      <label htmlFor="user-input">User Name:</label>
      <input
        id="user-input"
        className="input"
        value={userValue}
        onChange={e => setUserValue(e.target.value)}
        onKeyPress={e => (isEnterKey(e.key) ? setFormSubmit(true) : "")}
      />
      <label htmlFor="pass-input">Password:</label>
      <input
        type="password"
        id="pass-input"
        className="input"
        value={passValue}
        onChange={e => setPassValue(e.target.value)}
        onKeyPress={e => (isEnterKey(e.key) ? setFormSubmit(true) : "")}
      />
      <button
        className="submit-button"
        type="button"
        onClick={() => setFormSubmit(true)}
      >
        Submit
      </button>
      <button
        className="reset-button"
        type="button"
        onClick={() => setFormReset(true)}
      >
        Reset
      </button>
    </div>
  );
};

export default LoginForm;
