import React, { useState } from "react";
import Noteitem from "./Noteitem";
import "./Notelist.css";
import Addnote from "./Addnote";

const Notelist = () => {
  const [notelist, setNoteList] = useState([]);
  const [filter, setFilter] = useState("");
  const addHandle = (data) => {
    setNoteList([...notelist, data]);
  };
  const deleteHandle = (id) => {
    const filtered = notelist.filter((item) => {
      return id !== item.id;
    });
    setNoteList(filtered);
  };

  const filterHandle = (e) => {
    const out = notelist.filter((item) => {
      return item.note.toLowerCase().includes(e.target.value);
    });
    setFilter(out);
  };
  return (
    <div>
      <div className="filter">
        <input type="text" placeholder=" Search..." onChange={filterHandle} />
      </div>
      <div className="list">
        {filter
          ? filter.map((item) => {
              return (
                <Noteitem
                  id={item.id}
                  note={item.note}
                  key={item.id}
                  deleteHandle={deleteHandle}
                />
              );
            })
          : notelist &&
            notelist.map((item) => {
              return (
                <Noteitem
                  id={item.id}
                  note={item.note}
                  key={item.id}
                  deleteHandle={deleteHandle}
                />
              );
            })}
        <Addnote addHandle={addHandle} />
      </div>
    </div>
  );
};

export default Notelist;
