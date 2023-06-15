import React, { useEffect, useState } from "react";

const Edit = ({ edit }) => {
  console.log(edit);
  const [user, setUser] = useState(edit.username);
  //   useEffect(() => {
  //     if (edit) {
  //       setUser({ username: edit[0].username, userage: edit[0].userage });
  //     }
  //   }, [edit]);
  const editHandle = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          value={user}
          name="name"
          onChange={editHandle}
        />
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input id="age" type="text" value={edit.userage} name="age" />
        <br />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
};

export default Edit;
