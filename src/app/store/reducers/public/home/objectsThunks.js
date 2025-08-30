import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const objectsGet = createAsyncThunk(
  "contact/get",
  async (clientParams, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/base/listings/`, {
        params: clientParams,
      });
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const getCategory = createAsyncThunk(
  "get/category",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/users/category-list`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
