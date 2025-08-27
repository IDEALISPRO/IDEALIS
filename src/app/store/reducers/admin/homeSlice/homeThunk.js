import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";


export const bannerGet = createAsyncThunk(
  "banner/get",
  async (_, thunkAPI) => {
    try {
      const res = await axiosApi.get('/v4/main/banners');
      return res.data; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);
