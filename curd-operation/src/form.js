import React, { useState } from "react";

export default function Form({ getdata }) {
  const [input, setinput] = useState({ username: "", userage: "" });
  const submit = (e) => {
    e.preventDefault();
    getdata(input);
    setinput({ username: "", userage: "" });
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
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
        <input
          id="age"
          type="text"
          value={input.userage}
          onChange={(e) => setinput({ ...input, userage: e.target.value })}
          name="age"
        />
        <br />
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}
