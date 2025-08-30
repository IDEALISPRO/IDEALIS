import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const bannerGet = createAsyncThunk(
  "banner/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/main/banners/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const doFilters = createAsyncThunk(
  "filters/do",
  async (filters, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/base/listings/`, {
        params: filters,
      });
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const doHomeSearch = createAsyncThunk(
  "home/search",
  async (searchParams, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/users/listings/search/`, {
        params: searchParams,
      });
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
