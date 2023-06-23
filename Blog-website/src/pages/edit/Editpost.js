import React, { useEffect, useState } from "react";
import "./Editpost.css";
import { useLocation, useNavigate } from "react-router-dom";
import useApiFetch from "../../hook/useapifetch";

const Editpost = () => {
  const [editpost, setEditpost] = useState({ id: 0, title: "", body: "" });
  const [fieldValid, setFieldValid] = useState(null);
  const [modify, setModify] = useState(null);
  const [showsuccess, setShowsuccess] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { state: state } = location;
  const { Data, Err, isloading, optionData } = useApiFetch(
    `http://localhost:3500/post/${state.id}`,
    "PATCH"
  );
  const editHandle = (e) => {
    e.preventDefault();
    if (!editpost.title) {
      setFieldValid("Title should not be empty");
      return;
    }
    if (!editpost.body) {
      setFieldValid("Content should not be empty");
      return;
    }
    setFieldValid(null);
    optionData(modify);
  };
  useEffect(() => {
    if (Data.length !== 0) {
      setShowsuccess("Updated succesfully !");
      const timer = setTimeout(() => {
        navigate("/");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [Data]);
  useEffect(() => {
    setEditpost({ ...editpost, title: state.title, body: state.body });
  }, []);
  const titleHandle = (e) => {
    setEditpost({ ...editpost, title: e.target.value });
    setModify({ ...modify, title: e.target.value });
  };
  const contentHandle = (e) => {
    setEditpost({ ...editpost, body: e.target.value });
    setModify({ ...modify, body: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={editHandle}>
          <div className="form-group">
            <label htmlFor="title">Tittle</label>
            <input
              type="text"
              id="title"
              className="form-control"
              onChange={titleHandle}
              value={editpost.title}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              rows={5}
              onChange={contentHandle}
              value={editpost.body}
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
          <div className="btns">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editpost;
