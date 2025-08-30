
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const detailGet = createAsyncThunk(
  "detail/get",
  async (id, thunkAPI) => {
    try {
      const res = await axiosApi.get(`/base/listings/${id}/`);
      return res.data; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const detailViewPatch = createAsyncThunk(
  "detailView/patch",
  async ({id, newObject}, thunkAPI) => {
    try {
      const res = await axiosApi.patch(`/users/stats/${id}/`, newObject);
      return res.data; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);


export const detailContactsPatch = createAsyncThunk(
  "detailContacts/patch",
  async ({id, newObject}, thunkAPI) => {
    try {
      const res = await axiosApi.patch(`/users/stats/${id}/`, newObject);
      return res.data; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const detailLikesPatch = createAsyncThunk(
  "detailLikes/patch",
  async ({id, newObject}, thunkAPI) => {
    try {
      const res = await axiosApi.patch(`/users/stats/${id}/`, newObject);
      return res.data; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);