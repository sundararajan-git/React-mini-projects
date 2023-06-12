import React, { useState } from "react";
import "./form.css";

export default function Form({ getdata }) {
  const [input, setinput] = useState({ username: "", userage: "", id: 0 });
  const submit = (e) => {
    e.preventDefault();
    setinput({ ...input, id: input.id + 1 });
    if (input) {
      getdata(input);
    }
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
