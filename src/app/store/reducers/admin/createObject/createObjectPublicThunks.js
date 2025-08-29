import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const createObjectPublicThunk = createAsyncThunk(
  "newObject/objectPost",
  async (newObject, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.post(`/base/listings/`, newObject);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
