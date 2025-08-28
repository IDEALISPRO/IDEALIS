import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  getHotDeals,
  getMarketNews,
  getNewsBanner,
  getNewsEvents,
  getUsefulTips,
} from "./newsThunk";

const initialState = {
  list: [],
  hotDeals: [],
  marketNews: [],
  newsEvents: [],
  usefulTips: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsBanner.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(getNewsBanner.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getHotDeals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHotDeals.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.hotDeals = payload;
      })
      .addCase(getHotDeals.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getMarketNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMarketNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.marketNews = payload;
      })
      .addCase(getMarketNews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getNewsEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsEvents.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.newsEvents = payload;
      })
      .addCase(getNewsEvents.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUsefulTips.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsefulTips.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.usefulTips = payload;
      })
      .addCase(getUsefulTips.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useNews = () => useSelector((state) => state.news);
export default newsSlice.reducer;
