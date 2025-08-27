import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const agentsGet = createAsyncThunk(
  "agents/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/newbuild-agents/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
