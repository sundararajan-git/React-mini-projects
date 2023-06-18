import React from "react";
import "./LoginForm.css";
import { useState } from "react";
const LoginForm = ({ userDetail, currentuser }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [valid, setvalid] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setpassword] = useState(null);
  const loginHandle = (e) => {
    e.preventDefault();
    setvalid(true);
    const user = userDetail.find((item) => {
      return item.username === form.username && item.password === form.password
        ? item
        : null;
    });
    if (user) {
      currentuser(user);
    }
  };
  return (
    <>
      <div className="log-in">
        <form onSubmit={loginHandle}>
          <div></div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            placeholder="User name..."
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          {valid ? (
            form.username ? (
              <pre> </pre>
            ) : (
              <pre id="pre">Please enter your username...</pre>
            )
          ) : (
            <pre> </pre>
          )}
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {valid ? (
            form.password ? (
              <pre> </pre>
            ) : (
              <pre id="pre">Please enter your password...</pre>
            )
          ) : (
            <pre> </pre>
          )}
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
