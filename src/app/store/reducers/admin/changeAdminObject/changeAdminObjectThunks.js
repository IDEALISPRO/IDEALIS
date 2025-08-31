import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const objectIdThunk = createAsyncThunk(
  "objectId/objectPost",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/listings/${id}`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const objectPatch = createAsyncThunk(
  "object/Patch",
  async ({ id, newItem }, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.patch(
        `/users/listings/${id}/`,
        newItem
      );
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

// {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// }
