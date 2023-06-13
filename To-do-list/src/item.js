import React from "react";

const Item = ({ list, deleteHandle, checkhandle }) => {
  return (
    <div>
      {list &&
        list.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => checkhandle(item.id)}
                id={`c${item.id}`}
              />
              <label htmlFor={`c${item.id}`}>{item.item}</label>
              <button onClick={() => deleteHandle(item.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default Item;
