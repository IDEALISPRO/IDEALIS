import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  advantagesGet,
  agencyHistoryGet,
  missionValuesGet,
  teamGet,
} from "./aboutThunks";

const initialState = {
  advantage: [],
  agencyHistory: [],
  missionValues: [],
  teams: [],
  loading: false,
  error: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(agencyHistoryGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(agencyHistoryGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.agencyHistory = payload;
      })
      .addCase(agencyHistoryGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(missionValuesGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(missionValuesGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.missionValues = payload;
      })
      .addCase(missionValuesGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(advantagesGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(advantagesGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.advantage = payload;
      })
      .addCase(advantagesGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(teamGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(teamGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.teams = payload;
      })
      .addCase(teamGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useAbout = () => useSelector((state) => state.about);
export default aboutSlice.reducer;
