import React, { useEffect, useState } from "react";
import "./Createpost.css";
import { Link, useNavigate } from "react-router-dom";
import useApiFetch from "../../hook/useapifetch";

const Createpost = () => {
  const APIURL = "http://localhost:3500/post";
  const [createdpost, setCreatedpost] = useState({
    id: null,
    title: "",
    body: "",
  });
  const navigate = useNavigate();
  const [fieldValid, setFieldValid] = useState(null);
  const [showsuccess, setShowsuccess] = useState(null);
  const { Data, Err, isloading, optionData } = useApiFetch(APIURL, "POST");
  const submitHandle = (e) => {
    e.preventDefault();
    if (!createdpost.title) {
      setFieldValid("Title should not be empty");
      return;
    }
    if (!createdpost.body) {
      setFieldValid("Content should not be empty");
      return;
    }
    setFieldValid(null);
    optionData(createdpost);
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
          <div className="btns">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
