import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useApiFetch = (url, method) => {
  const [apidata, setApidata] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);
  const [isloading, setisLoading] = useState(null);
  const [createdata, setCreatedata] = useState(null);
  const navigate = useNavigate();
  const postData = (data) => {
    if (method === "POST") {
      setCreatedata(null);
      setCreatedata({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "PATCH") {
      setCreatedata({
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "DELETE") {
      setCreatedata({
        method: "DELETE",
      });
    }
  };
  useEffect(() => {
    setisLoading(true);
    const apiFetch = async (createdata) => {
      try {
        const response = await fetch(url, { ...createdata });
        if (!response.ok) throw Error("Data is not recived");
        const jsonresponse = await response.json();
        setApidata(jsonresponse);
        setFetchErr(null);
      } catch (err) {
        setFetchErr(err.message);
      } finally {
        setisLoading(false);
      }
    };
    if (method === "GET") {
      (async () => await apiFetch())();
    } else if (
      (method === "POST" || method === "PATCH" || method === "DELETE") &&
      createdata
    ) {
      (async () => apiFetch(createdata))();
      apiFetch(createdata);
    }
  }, [url, method, createdata]);
  return { apidata, fetchErr, isloading, postData };
};
export default useApiFetch;
