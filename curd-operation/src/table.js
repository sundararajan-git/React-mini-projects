import React from "react";
import "./table.css";

export default function Table({ pass, deleteHandle }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
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
