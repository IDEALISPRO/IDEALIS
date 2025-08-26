import axios from "axios";
import { BASE_URL } from "./constants";

const instance = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;
