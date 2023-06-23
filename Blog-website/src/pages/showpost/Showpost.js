import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Showpost.css";
import useApiFetch from "../../hook/useapifetch";

const Showpost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [showsuccess, setShowsuccess] = useState(null);
  const { Data, Err, isloading, optionData } = useApiFetch(
    `http://localhost:3500/post/${state.id}`,
    "DELETE"
  );
  const editpost = (id) => {
    navigate(`/edit/${id}`, { state: state });
  };
  const deletepost = (id) => {
    optionData();
  };
  useEffect(() => {
    if (Data.length !== 0) {
      setShowsuccess("Created succesfully !");
      const timer = setTimeout(() => {
        navigate("/");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [Data]);
  return (
    <div className="container">
      <h2>{state.title}</h2>
      <br />
      <p>{state.body}</p>
      <div className="btns">
        <button type="button" onClick={() => editpost(state.id)}>
          Edit
        </button>
        <button type="button" onClick={() => deletepost(state.id)}>
          Delete
        </button>
      </div>
      <br />
      <br />
      <br />
      {showsuccess && (
        <div className="alert alert-success" role="alert">
          {showsuccess}
        </div>
      )}
    </div>
  );
};

export default Showpost;
