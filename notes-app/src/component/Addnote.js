import React, { useState } from "react";

const Addnote = ({ addHandle }) => {
  const [note, setNote] = useState({ id: 0, note: "" });
  const addnote = (e) => {
    setNote({ ...note, note: e.target.value });
  };
  const clickHandle = () => {
    setNote({ ...note, note: "", id: note.id + 1 });
    addHandle(note);
  };
  return (
    <div className="add">
      <textarea
        cols="8"
        rows="10"
        placeholder="Add some notes..."
        onChange={addnote}
        value={note.note}
      ></textarea>
      <button onClick={clickHandle}>Submit</button>
    </div>
  );
};

export default Addnote;
