import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../../services/AxiosPub";

export const objectsGet = createAsyncThunk(
  "contact/get",
  async (clientParams, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.get(`/v2/base/listings/`, {
        params: clientParams,
      });
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);
