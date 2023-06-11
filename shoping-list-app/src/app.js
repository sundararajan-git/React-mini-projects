import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({ item: "", id: 1, itemnum: 0 });
  const [click, setClick] = useState(false);
  const [total, settotal] = useState(0);
  const addItem = (e) => {
    setItem({ ...item, item: e.target.value });
  };
  const addClick = () => {
    if (item.item) {
      setItem({ ...item, id: item.id + 1 });
      setList([...list, item]);
      setClick(true);
      setItem({ ...item, item: "" });
      localStorage.setItem("shoping-list", JSON.stringify(list));
    }
  };
  const deleteHandle = (e, i) => {
    let filtered = list.filter((item, index) => {
      return i !== index;
    });
    setList(filtered);
    localStorage.setItem("shoping-list", JSON.stringify(filtered));
  };
  const increment = (i) => {
    setItem([...list, list[i].itemnum++]);
    // eslint-disable-next-line
    list.map((item, index) => {
      if (i === index) {
        settotal(total + 1);
      }
    });
  };
  const decrement = (i) => {
    setItem([...list, list[i].itemnum > 0 ? list[i].itemnum-- : null]);
    settotal(total - 1);
  };
  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <input
            type="text"
            id="add"
            placeholder="Add item..."
            value={item.item}
            onChange={addItem}
          />
          <button onClick={addClick}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="lists">
          {click
            ? list &&
              list.map((item, index) => {
                return (
                  <div key={item.id} className="list">
                    <div className="item">
                      <input type="radio" id={`radio${index}`} />
                      <span> </span>
                      <label htmlFor={`radio${index}`}>{item.item}</label>
                    </div>
                    <div id="numhandle">
                      <button onClick={() => decrement(index)}>
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      {item.itemnum}
                      <button onClick={() => increment(index)}>
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                    <button
                      typeof="button"
                      onClick={(e) => deleteHandle(e, index)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                );
              })
            : null}
        </div>
        <p>Total:{total}</p>
      </div>
    </div>
  );
};
export default App;
