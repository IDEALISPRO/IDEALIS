
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const detailGet = createAsyncThunk(
  "detail/get",
  async (id, thunkAPI) => {
    try {
      const res = await axiosApi.get(`/v2/base/listings/${id}/`);
      return res.data; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);
