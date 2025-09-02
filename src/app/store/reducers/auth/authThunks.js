import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../services/constants";
import { axiosProfile } from "../../../services/AxiosPub";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/users/login/`,
        credentials
      );
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getSelf",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/me/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateSelf",
  async (user, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      const keys = Object.keys(user);
      keys.forEach((key) => {
        const value = user[key];
        if (value !== null) {
          formData.append(key, value);
        }
      });
      console.log(formData);

      const { data: response } = await axiosProfile.patch(
        `/users/me/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
