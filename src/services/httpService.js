import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  toast.error("an Unexpected error");

  const expectedError = error.response && error.response.status >= 403;
  if (expectedError) {
    toast.error("an Unexpected error");
    console.log(error.response, error.response.status);
  }
  return Promise.reject(error);
});

const token = localStorage.getItem("token");

axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
  Accept: "application/json",
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
