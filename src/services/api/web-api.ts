import axios, { AxiosInstance } from "axios";

const QSApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
});

export default QSApi;
