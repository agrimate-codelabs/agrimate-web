import Axios from "axios";

let urls = {
  test: `http://localhost:3000`,
  development: "http://agrimate-api.unikomcodelabs.id/",
  production: "http://agrimate-api.unikomcodelabs.id/",
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  // },
  withCredentials: true,
});

export default api;
