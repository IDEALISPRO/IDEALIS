import axios from "axios";
import i18n from "../../i18n/i18n";
import { BASE_URL } from "./constants";
import Cookies from "js-cookie";

const axiosApi = axios.create({
  baseURL: `${BASE_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosApi.interceptors.request.use((config) => {
  const lang = i18n.language;
  config.baseURL = `${BASE_URL}/api/`;
  return config;
});

const axiosProfile = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${Cookies.get("token") || ""}`,
  },
});

export { axiosApi, axiosProfile };
