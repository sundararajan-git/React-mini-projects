import React, { useEffect, useState } from "react";
import "./form.css";

export default function Form({ getdata, getitem, updateHandle }) {
  const [input, setinput] = useState({ username: "", userage: "", id: 0 });
  useEffect(() => {
    if (getitem) {
      setinput({
        username: getitem.username,
        userage: getitem.userage,
        id: getitem.id,
      });
    }
  }, [getitem]);
  const submit = (e) => {
    e.preventDefault();
    setinput({ ...input, id: input.id + 1 });
    if (getitem) {
      updateHandle(input);
    } else {
      getdata(input);
    }
    setinput({ username: "", userage: "", id: 0 });
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
        <button onClick={submit}>{getitem ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}
