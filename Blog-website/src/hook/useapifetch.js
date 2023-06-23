import { useEffect, useState } from "react";

const useApiFetch = (url, method) => {
  const [Data, setData] = useState([]);
  const [Err, setErr] = useState(null);
  const [isloading, setisLoading] = useState(null);
  const [Option, setOption] = useState(null);
  const optionData = (data) => {
    if (method === "POST") {
      setOption(null);
      setOption({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "PATCH") {
      setOption({
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "DELETE") {
      setOption({
        method: "DELETE",
      });
    }
  };
  useEffect(() => {
    setisLoading(true);
    const apiFetch = async (Option) => {
      try {
        const response = await fetch(url, { ...Option });
        if (!response.ok) throw Error("Data is not recived");
        const jsonresponse = await response.json();
        setData(jsonresponse);
        setErr(null);
      } catch (err) {
        setErr(err.message);
      } finally {
        setisLoading(false);
      }
    };
    if (method === "GET") {
      (async () => await apiFetch())();
    } else if (
      (method === "POST" || method === "PATCH" || method === "DELETE") &&
      Option
    ) {
      (async () => await apiFetch(Option))();
    }
  }, [url, method, Option]);
  return { Data, Err, isloading, optionData };
};
export default useApiFetch;
