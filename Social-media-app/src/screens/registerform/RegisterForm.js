import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
const RegisterForm = ({ registerDetail }) => {
  // eslint-disable-next-line
  const [loginuser, setLoginuser] = useState(null);
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setLoginuser(data.user.email);
    });
  };
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [valid, setvalid] = useState(false);
  const clickHandle = () => {
    setvalid(true);
    registerDetail(form);
  };
  return (
    <div className="register">
      <Link to={"/login"}>Log in</Link>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          placeholder="user name.."
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
        )}{" "}
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
        <br />
        <div>
          <div onClick={googleLogin} id="g-btn" role="button">
            <img
              src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"
              title="Google sign up"
              alt="Google"
            ></img>
          </div>
        </div>
        <br />
        <button type="submit" id="sign-up" onClick={clickHandle}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
