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
        {login ? (
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
            <hr />
            <div>
              <button>Google</button>
              <button>Facebook</button>
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
