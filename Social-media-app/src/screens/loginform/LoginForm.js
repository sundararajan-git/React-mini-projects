import React, { useEffect, useState } from "react";
import useApiFetch from "../../hook/UseApiFetch";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setusername }) => {
  // eslint-disable-next-line
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [valid, setvalid] = useState(false);
  const navigate = useNavigate();
  const { Data, Err, isloading } = useApiFetch(
    "http://localhost:3600/usres",
    "GET"
  );
  const { optionData } = useApiFetch("http://localhost:3600/login", "PATCH");
  const clickHandle = () => {
    setvalid(true);
    if (form.email && form.password) {
      Data.map((item) => {
        if (item.email === form.email && item.password === form.password) {
          setusername(form.email.split("@")[0]);
          navigate("/profile");
        }
      });
    }
  };
  return (
    <>
      <div className="loginForm">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email..."
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {valid ? (
            form.email ? (
              <pre> </pre>
            ) : (
              <pre id="pre">Please enter your email...</pre>
            )
          ) : (
            <pre> </pre>
          )}
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
          <button type="submit" id="login-btn" onClick={clickHandle}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
