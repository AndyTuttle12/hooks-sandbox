import React, { useState } from "react";
import "./style.css";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="login-form">
      <label htmlFor="form-input">Input with Hooks!</label>
      <input
        id="form-input"
        className="input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default LoginForm;
