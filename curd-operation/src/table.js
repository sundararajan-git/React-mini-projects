import React, { useState } from "react";

export default function Table({ pass, deleteHandle }) {
  return (
    <div>
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
                    <button onClick={null}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deleteHandle(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
