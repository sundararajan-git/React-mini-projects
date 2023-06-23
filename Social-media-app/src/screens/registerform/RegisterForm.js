import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import "./RegisterForm.css";

const RegisterForm = () => {
  // eslint-disable-next-line
  const [loginuser, setLoginuser] = useState(null);
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setLoginuser(data.user.email);
      console.log(data.user.email);
    });
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [valid, setvalid] = useState(false);
  const [login, setLogin] = useState(false);
  const clickHandle = () => {
    setvalid(true);
    if (form.email && form.password && form.password === form.confirmPassword) {
      console.log(form);
    }
  };
  return (
    <div>
      <div className="RegisterForm">
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
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm-Password..."
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
          {valid ? (
            !form.confirmPassword || form.password !== form.confirmPassword ? (
              <pre id="pre">Please enter your confirmPassword...</pre>
            ) : (
              <pre> </pre>
            )
          ) : (
            <pre> </pre>
          )}
          <div onClick={googleLogin} id="g-btn" role="button">
            <img src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"></img>
          </div>
          <pre> </pre>
          <button type="submit" id="login-btn" onClick={clickHandle}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
