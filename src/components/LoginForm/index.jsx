import React, { useState, useEffect } from "react";
import "./style.css";

const isEnterKey = key => key === "Enter";

const LoginForm = props => {
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  useEffect(() => {
    console.log(userValue);
  }, [props]);
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
      {`Submit form? ${formSubmit}`}
    </div>
  );
};

export default LoginForm;
