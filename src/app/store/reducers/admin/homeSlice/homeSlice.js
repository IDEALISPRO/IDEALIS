import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { bannerGet, doFilters, doHomeSearch } from "./homeThunk";

const initialState = {
  banner: [],
  loading: false,
  error: null,
  filters: [],
  searchResults: [],
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bannerGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(bannerGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.banner = payload;
      })
      .addCase(bannerGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(doFilters.pending, (state) => {
        state.loading = true;
      })
      .addCase(doFilters.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.filters = payload;
      })
      .addCase(doFilters.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(doHomeSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(doHomeSearch.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.searchResults = payload;
      })
      .addCase(doHomeSearch.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useBanner = () => useSelector((state) => state.banner);
export default bannerSlice.reducer;
