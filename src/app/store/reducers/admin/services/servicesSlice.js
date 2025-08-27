import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getServicesBanner, getServicesStep } from "./servicesThunk";

const initialState = {
  list: [],
  stepList: [],
  loading: false,
  error: null,
};

const services = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServicesBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(getServicesBanner.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(getServicesBanner.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getServicesStep.pending, (state) => {
        state.loading = true;
      })
      .addCase(getServicesStep.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.stepList = payload;
      })
      .addCase(getServicesStep.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useServices = () => useSelector((state) => state.services);
export default services.reducer;
