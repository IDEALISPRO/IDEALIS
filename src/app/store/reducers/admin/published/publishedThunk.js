import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosProfile } from "../../../../services/AxiosPub";

export const publishedGet = createAsyncThunk(
  "admin/published",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/listings/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const publishedGetItem = createAsyncThunk(
  "admin/publishedItem",
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

export const getSearchTrending = createAsyncThunk(
  "admin/getSearchTrending",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/search/trending/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const getSavedSearch = createAsyncThunk(
  "admin/getSavedSearch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosProfile.get(`/users/saved-searches/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
