import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const lawyersGet = createAsyncThunk(
  "lawyers/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/lawyers/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
