import axios, { AxiosInstance } from "axios";

const QS_API: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
});

export default QS_API;
