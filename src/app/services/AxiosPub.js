import axios from "axios";
import i18n from "../../i18n/i18n";
import Cookies from "js-cookie";
import { BASE_URL } from "./constants";

const axiosApi = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosApi.interceptors.request.use((config) => {
  const lang = i18n.language;
  config.headers["Accept-Language"] = lang;
  config.baseURL = `${BASE_URL}/api/v1/`;
  return config;
});

const axiosProfile = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    Accept: "application/json",
  },
});

axiosProfile.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosApi, axiosProfile };
