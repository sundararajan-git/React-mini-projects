import React, { useState } from "react";
import "./App.css";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
const App = () => {
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
      console.log("hi");
      setLogin(true);
    }
  };
  const logout = () => {
    setLogin(!login);
  };
  return (
    <div className="body">
      <div className="container">
        {login || loginuser ? (
          <div className="loginSuccess">
            <p>Login Succesfully !</p>
            <button onClick={logout} id="logout-btn">
              Log out
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
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
              !form.confirmPassword ||
              form.password !== form.confirmPassword ? (
                <pre id="pre">Please enter your confirmPassword...</pre>
              ) : (
                <pre> </pre>
              )
            ) : (
              <pre> </pre>
            )}
            <div>
              <div onClick={googleLogin} id="g-btn" role="button">
                <img src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"></img>
                <span>Google</span>
              </div>
            </div>
            <br />
            <button type="submit" id="login-btn" onClick={clickHandle}>
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
