import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const postTransfer = createAsyncThunk(
  "Transfer/post",
  async (newManager, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.post(
        "/users/users/transfer_manager/",
        newManager
      );
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const deleteManager = createAsyncThunk(
  "Manager/delete",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.delete(
        `/users/register-managers/${id}`
      );
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
