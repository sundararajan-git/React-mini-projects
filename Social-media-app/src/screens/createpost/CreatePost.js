import React, { useEffect, useState } from "react";
import useApiFetch from "../../hook/UseApiFetch";
import API_URL from "../../api/api";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [createdpost, setCreatedpost] = useState({ title: "", body: "" });
  const [fieldValid, setFieldvalid] = useState(null);
  const [showsuccess, serShowsuccess] = useState(null);
  const navigate = useNavigate();
  const { Data, Err, isloading, optionData } = useApiFetch(API_URL, "POST");
  const submitHandle = (e) => {
    e.preventDefault();
    optionData(createdpost);
    // setCreatedpost({ title: "", body: "" });
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
          <div className="btns">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
