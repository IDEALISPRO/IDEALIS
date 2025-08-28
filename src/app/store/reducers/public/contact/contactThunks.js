import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const contactGet = createAsyncThunk(
  "contact/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v5/pages/about_info/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
