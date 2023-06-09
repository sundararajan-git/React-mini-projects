import React from "react";

const App = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" placeholder="Email..." required />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password..."
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
