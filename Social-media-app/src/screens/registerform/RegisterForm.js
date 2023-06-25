import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import useApiFetch from "../../hook/UseApiFetch";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";

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
    username: "",
  });
  const [valid, setvalid] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const { Data, Err, isloading, optionData } = useApiFetch(
    "http://localhost:3600/usres",
    "POST"
  );
  const clickHandle = (e) => {
    e.preventDefault();
    setvalid(true);
    if (form.email && form.password && form.password === form.confirmPassword) {
      optionData(form);
    }
  };
  useEffect(() => {
    if (Data.length !== 0) {
      navigate("/login");
    }
  }, [Data]);
  return (
    <div>
      <div className="RegisterForm" id="register">
        <form onSubmit={clickHandle} className="form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email..."
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
                username: e.target.value.split("@")[0],
              })
            }
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
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
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
          <button type="submit" id="login-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
