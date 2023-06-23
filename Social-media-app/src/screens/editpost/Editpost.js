import React, { useEffect, useState } from "react";
import "./Editpost.css";
import { useLocation, useNavigate } from "react-router-dom";
import useApiFetch from "../../hook/UseApiFetch";

const Editpost = () => {
  const [createdpost, setCreatedpost] = useState({
    id: 0,
    title: "",
    body: "",
  });
  const loaction = useLocation();
  const { state } = loaction;
  const navigate = useNavigate();
  const [fieldValid, setFieldValid] = useState(null);
  const [showsuccess, setShowsuccess] = useState(null);
  const { Data, Err, isloading, optionData } = useApiFetch(
    `http://localhost:3600/posts/${state.id}`,
    "PATCH"
  );
  useEffect(() => {
    if (state) {
      setCreatedpost({ title: state.title, body: state.body });
    }
  }, [state]);
  const submitHandle = (e) => {
    e.preventDefault();
    setFieldValid(null);
    if (!createdpost.title) {
      setFieldValid("Title should not be empty");
      return;
    }
    if (!createdpost.body) {
      setFieldValid("Content should not be empty");
      return;
    }
    optionData(createdpost);
    setShowsuccess("Update succesfully !");
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
    <div>
      <div className="container">
        <form onSubmit={submitHandle}>
          <div className="form-group">
            <label htmlFor="title">Tittle</label>
            <input
              type="text"
              id="title"
              className="form-control"
              onChange={(e) =>
                setCreatedpost({ ...createdpost, title: e.target.value })
              }
              value={createdpost.title}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              rows={5}
              onChange={(e) =>
                setCreatedpost({ ...createdpost, body: e.target.value })
              }
              value={createdpost.body}
            ></textarea>
          </div>
          <br />
          {fieldValid && (
            <div className="alert alert-danger" role="alert">
              {fieldValid}
            </div>
          )}
          {showsuccess && (
            <div className="alert alert-success" role="alert">
              {showsuccess}
            </div>
          )}
          <div>
            <button className="btn create-btn" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editpost;