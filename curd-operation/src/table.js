import React from "react";
import "./table.css";

export default function Table({ pass, deleteHandle, editHandle }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {pass &&
            pass.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.username}</td>
                  <td>{data.userage}</td>
                  <td>
                    <button onClick={() => editHandle(data.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deleteHandle(data.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
