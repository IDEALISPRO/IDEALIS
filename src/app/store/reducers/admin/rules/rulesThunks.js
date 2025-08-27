import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const rulesGet = createAsyncThunk(
  "rules/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/rules/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
