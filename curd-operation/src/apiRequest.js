const api = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("please refersh page");
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
};

export default api;
