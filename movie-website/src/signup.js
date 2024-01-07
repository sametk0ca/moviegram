import React, { useState } from "react";
import sgn from './signup.module.css';

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedElement, setFocusedElement] = useState(null);

  const handleFocus = (event) => {
    setFocusedElement(event.target.name);
  };

  const handleBlur = () => {
    setFocusedElement(null);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className={sgn.container}>
      <h1>Welcome to <span style={{color: "#019788"}}>Moviegram</span></h1>
      <h1>Sign up</h1>

      <div className={sgn["form-group"]}>
        <i
          className={`fa-solid fa-user fa-lg ${focusedElement === "username" ? sgn.focused : ""}`}
          style={{ color: focusedElement === "username" ? "#019788" : "" }}
        ></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={sgn["form-control"]}
        />
      </div>

      <div className={sgn["form-group"]}>
        <i
          className={`fa-solid fa-key fa-lg ${focusedElement === "password" ? sgn.focused : ""}`}
          style={{ color: focusedElement === "password" ? "#019788" : "" }}
        ></i>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={sgn["form-control"]}
        />
      </div>

      <div className={sgn["form-group"]}>
        <i
          className={`fa-solid fa-lock fa-lg ${focusedElement === "password-confirm" ? sgn.focused : ""}`}
          style={{ color: focusedElement === "password-confirm" ? "#019788" : "" }}
        ></i>
        <input
          type="password"
          placeholder="Confirm Password"
          name="password-confirm"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={sgn["form-control"]}
        />
      </div>

      <label className={sgn["link-label"]}>
        <a href="./login" className={sgn["login-links"]}>Already have an account? Log in</a>
      </label>

      <button type="submit" className={sgn["signup-btn"]}>Sign up</button>
    </div>
  );
};

export default SignupPage;
