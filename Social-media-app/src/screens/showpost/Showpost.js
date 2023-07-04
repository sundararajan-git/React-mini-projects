import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Showpost.css";
import { useFirestore } from "../../hook/useFirestore";
import { useAuthContext } from "../../hook/useAuthcontext";
import { useThemeContext } from "../../hook/useThemeContext";

const Showpost = () => {
  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  const loaction = useLocation();
  const { state } = loaction;
  const { user } = useAuthContext();
  const { err, deleteDocument } = useFirestore("posts");
  const deleteHandle = (id) => {
    setDel(true);
    deleteDocument(id);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const editHandle = () => {
    navigate(`/editpost/${state.id}`, { state: state });
  };
  const backHandle = () => {
    navigate("/");
  };
  const { theme } = useThemeContext();
  return (
    <div className="container cardcontainer">
      <div className={`card  ${theme}card`}>
        <div className="card-body">
          <h5 className="card-title">{state.title}</h5>
          <p className="card-text">{state.body}</p>
          <pre>by {state.username ? state.username : "unkown"}</pre>
          <br />
          <br />
          <button className="btn" onClick={backHandle}>
            Back
          </button>
          {user.uid === state.userId && (
            <>
              <div className="btns">
                <button onClick={editHandle} className="btn">
                  Edit
                </button>
                <button onClick={() => deleteHandle(state.id)} className="btn">
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <br />
      {del && (
        <div className="alert alert-success" role="alert">
          Deleted Successfully !
        </div>
      )}
      {err && <p>Data is not recived...</p>}
    </div>
  );
};

export default Showpost;
