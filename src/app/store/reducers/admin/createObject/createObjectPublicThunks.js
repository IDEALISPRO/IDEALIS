import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const createObjectPublicThunk = createAsyncThunk(
  "newObject/objectPost",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.post(`/base/listings/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
