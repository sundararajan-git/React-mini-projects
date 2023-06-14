import React from "react";

const Item = ({ list, deleteHandle, checkhandle }) => {
  return (
    <div className="items">
      {list &&
        list.map((item) => {
          return (
            <div key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => checkhandle(item.id)}
                id={`c${item.id}`}
                className={item.checked ? "checked" : "notchecked"}
              />
              <span htmlFor={`c${item.id}`}>{item.item}</span>
              <button onClick={() => deleteHandle(item.id)} className="btns">
                Delete
              </button>
              <button onClick={() => deleteHandle(item.id)} className="btns">
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Item;
