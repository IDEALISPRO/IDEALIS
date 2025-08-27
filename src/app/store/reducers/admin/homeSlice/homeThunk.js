import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";


export const bannerGet = createAsyncThunk(
  "banner/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v4/main/banners/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);