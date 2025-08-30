import { axiosApi } from "../../../../services/AxiosPub";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const smsPosts = createAsyncThunk(
  "sms/post",
  async (clientMessage, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.post(`/pages/sms/`, clientMessage);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
