import axios from "axios";
import { createElement } from "react";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default AxiosInstance;
