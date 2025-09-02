import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const getNewsBanner = createAsyncThunk("news/getBanner", async () => {
  try {
    const { data } = await axiosApi.get("/pages/news/");
    return data;
  } catch (e) {
    console.log(e);
    return rejectWithValue(e.response?.data || e.message);
  }
});

export const getHotDeals = createAsyncThunk("news/getHotDeals", async () => {
  try {
    const { data } = await axiosApi.get("/pages/hot_deals/");
    return data;
  } catch (e) {
    console.log(e);
    return rejectWithValue(e.response?.data || e.message);
  }
});

export const getMarketNews = createAsyncThunk(
  "news/getMarketNews",
  async () => {
    try {
      const { data } = await axiosApi.get("/pages/realty_updates/");
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const getNewsEvents = createAsyncThunk(
  "news/getNewsEvents",
  async () => {
    try {
      const { data } = await axiosApi.get("/pages/happening/");
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const getUsefulTips = createAsyncThunk(
  "news/getUsefulTips",
  async () => {
    try {
      const { data } = await axiosApi.get("/pages/useful_tips/");
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
