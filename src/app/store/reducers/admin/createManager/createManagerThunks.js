import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const createManagerPost = createAsyncThunk(
  "createManager/post",
  async (newObject, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.post(
        `/users/register-managers/`,
        newObject,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
