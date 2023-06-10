import React, { useState } from "react";
import "./form.css";

export default function Form({ getdata }) {
  const [input, setinput] = useState({ username: "", userage: "" });
  const submit = (e) => {
    e.preventDefault();
    getdata(input);
    setinput({ username: "", userage: "" });
  };
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          value={input.username}
          onChange={(e) => {
            setinput({ ...input, username: e.target.value });
          }}
          name="name"
        />
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input
          id="age"
          type="text"
          value={input.userage}
          onChange={(e) => setinput({ ...input, userage: e.target.value })}
          name="age"
        />
        <br />
        <br />
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}
