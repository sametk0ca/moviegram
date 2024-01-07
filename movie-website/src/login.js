import React, { useState } from "react";
import lg from './login.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focusedElement, setFocusedElement] = useState(null);

  const handleFocus = (event) => {
    setFocusedElement(event.target.name);
  };

  const handleBlur = () => {
    setFocusedElement(null);
  };

  return (
    <div className={lg.container}>
      <h1>Welcome Again!</h1>
      <h1>Log in</h1>

      <div className={lg["form-group"]}>
        <i
          className={`fa-solid fa-user fa-lg ${focusedElement === "username" ? lg.focused : ""}`}
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
          className={lg["form-control"]}
        />
      </div>

      <div className={lg["form-group"]}>
        <i
          className={`fa-solid fa-key fa-lg ${focusedElement === "password" ? lg.focused : ""}`}
          style={{ color: focusedElement === "password" ? "#019788" : "" }}
        ></i>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={lg["form-control"]}
        />
      </div>
      <label className={lg["link-label"]}>
        <a href="#" className={lg["login-links"]}>Forget your password?</a>
        <a href="./signup" className={lg["login-links"]}>Don't have an account?</a></label>

      <a href="./home"><button type="submit" className={lg["login-btn"]}>Log in</button></a>
    </div>
  );
};

export default LoginPage;
