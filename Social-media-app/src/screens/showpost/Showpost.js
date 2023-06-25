import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useApiFetch from "../../hook/UseApiFetch";
import "./Showpost.css";

const Showpost = () => {
  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  const loaction = useLocation();
  const { state } = loaction;
  const { Data, Err, isloading, optionData } = useApiFetch(
    `http://localhost:3600/posts/${state.id}`,
    "DELETE"
  );
  const deleteHandle = () => {
    setDel(true);
    optionData();
  };
  const editHandle = () => {
    navigate(`/editpost/${state.id}`, { state: state });
  };
  const backHandle = () => {
    navigate("/");
  };
  useEffect(() => {
    if (Data.length !== 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [Data]);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{state.title}</h5>
          <p className="card-text">{state.body}</p>
          <pre>{state.username}</pre>
          <br />
          <br />
          <button className="btn" onClick={backHandle}>
            Back
          </button>
          <div className="btns">
            <button onClick={editHandle} className="btn">
              Edit
            </button>
            <button onClick={deleteHandle} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
      <br />
      {del && (
        <div className="alert alert-success" role="alert">
          Deleted Successfully !
        </div>
      )}
    </div>
  );
};

export default Showpost;
