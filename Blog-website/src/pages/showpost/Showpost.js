import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Showpost.css";
import useApiFetch from "../../hook/useapifetch";

const Showpost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { apidata, fetchErr, isloading, postData } = useApiFetch(
    `http://localhost:3500/post/${state.id}`,
    "DELETE"
  );
  const editpost = (id) => {
    navigate(`/edit/${id}`, { state: state });
  };
  const deletepost = (id) => {
    postData();
  };
  useEffect(() => {
    if (apidata.length !== 0) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [apidata]);
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
    </div>
  );
};

export default Showpost;
