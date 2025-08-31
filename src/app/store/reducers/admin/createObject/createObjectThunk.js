import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const createObjectThunk = createAsyncThunk(
  "newObject/objectPost",
  async (newObject, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.post(`/users/listings/`, newObject, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
