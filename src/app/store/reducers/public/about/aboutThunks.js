import { axiosApi } from "../../../../services/AxiosPub";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const missionValuesGet = createAsyncThunk(
  "missionValues/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v3/aboutidealis/mission-values/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const agencyHistoryGet = createAsyncThunk(
  "agencyHistory/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v3/aboutidealis/agency-history/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const advantagesGet = createAsyncThunk(
  "advantages/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v3/aboutidealis/advantages/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const teamGet = createAsyncThunk(
  "team/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v3/aboutidealis/team/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const reviewsGet = createAsyncThunk(
  "reviews/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v3/aboutidealis/reviews/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);