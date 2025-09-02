import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const getServicesBanner = createAsyncThunk(
  "services/getBanner",
  async () => {
    try {
      const { data } = await axiosApi.get("/pages/services/");
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const getServicesStep = createAsyncThunk(
  "services/getStep",
  async () => {
    try {
      const { data } = await axiosApi.get("/pages/steps/");
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
