import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const savedSearchedGet = createAsyncThunk(
  "savedSearched/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/saved-searches/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
