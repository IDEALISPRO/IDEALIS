import { axiosApi } from "../../../../services/AxiosPub";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const missionValuesGet = createAsyncThunk(
  "missionValues/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/aboutidealis/mission-values/`);
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
      const { data } = await axiosApi.get(`/aboutidealis/agency-history/`);
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
      const { data } = await axiosApi.get(`/aboutidealis/advantages/`);
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
      const { data } = await axiosApi.get(`/aboutidealis/team/`);
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
      const { data } = await axiosApi.get(`/aboutidealis/reviews/`);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);