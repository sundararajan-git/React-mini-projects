import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [valid, setvalid] = useState(false);
  const [login, setLogin] = useState(false);
  const clickHandle = () => {
    setvalid(true);
    if (form.email && form.password === form.confirmPassword) {
      setLogin(true);
      console.log("hi");
    }
  };
  const logout = () => {
    setLogin(!login);
  };
  return (
    <div>
      {login ? (
        <div>
          <p>Login Succesfully</p>
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Email..."
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <br />
          {valid ? form.email ? null : <p>Please enter your email...</p> : null}
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password..."
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <br />
          {valid ? (
            form.password ? null : (
              <p>Please enter your password...</p>
            )
          ) : null}
          <label htmlFor="confirm-password">Confirm Password</label>
          <br />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm-Password..."
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
          <br />
          {valid ? (
            !form.email || form.password !== form.confirmPassword ? (
              <p>Please enter your confirmPassword...</p>
            ) : null
          ) : null}
          <button type="submit" onClick={clickHandle}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
