import React, { useState, useEffect } from "react";
import "./style.css";

const isEnterKey = key => key === "Enter";

const LoginForm = props => {
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [formReset, setFormReset] = useState(false);
  const [key, setKey] = useState("someKey");
  const [logo, setLogo] = useState(null);
  const [statusActive, setStatusActive] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [status, setStatus] = useState("");
  const importLogo = () => {
    import(`../../${props.logo}`)
      .then(l => setLogo(l.default))
      .catch(e => console.error(JSON.stringify(e)));
  };
  const submitForm = () => {
    const formData = { userValue, passValue, key };
    setFormSubmit(true);
    setFormReset(true);
    setKey("newKey");
    props.submitForm(formData, result => {
      if (result.code === 200) {
        // return new notification with login message.
        setStatusActive(true);
        setStatus(result.message);
        setStatusType("success");
        setTimeout(() => {
          setStatusActive(false);
          setStatus("");
          setStatusType("");
        }, 2800);
      } else {
        setStatusActive(true);
        setStatus(result.message);
        setStatusType("fail");
        setTimeout(() => {
          setStatusActive(false);
          setStatus("");
          setStatusType("");
        }, 2800);
      }
    });
  };
  useEffect(() => {
    setUserValue("");
    setPassValue("");
    if (!logo && props.logo) {
      importLogo();
    }
    return () => setFormReset(false);
  }, [formSubmit, formReset]);
  return (
    <>
      {typeof logo === "string" && (
        <div className="logo-area">
          <img className="App-logo" src={logo} alt="test" />
        </div>
      )}
      <div
        className={`login-status${" " + statusType}${
          statusActive ? " active" : ""
        }`}
      >
        {status}
      </div>
      <div className="login-form">
        <label htmlFor="user-input">User Name:</label>
        <input
          id="user-input"
          className="input"
          value={userValue}
          onChange={e => setUserValue(e.target.value)}
          onKeyPress={e => (isEnterKey(e.key) ? submitForm() : "")}
        />
        <label htmlFor="pass-input">Password:</label>
        <input
          type="password"
          id="pass-input"
          className="input"
          value={passValue}
          onChange={e => setPassValue(e.target.value)}
          onKeyPress={e => (isEnterKey(e.key) ? submitForm() : "")}
        />
        <button
          className="submit-button"
          type="button"
          onClick={() => submitForm()}
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
      {props.registration && (
        <div className="registration-message">
          {props.registerMessage && <span>{props.registerMessage} </span>}
          <a href={props.registration}>Register</a>
        </div>
      )}
    </>
  );
};

export default LoginForm;
