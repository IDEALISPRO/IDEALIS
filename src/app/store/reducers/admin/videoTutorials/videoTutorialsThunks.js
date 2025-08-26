import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const videoTutorialsGet = createAsyncThunk(
  "videoTutorial/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/videos/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
