import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { bannerGet } from "./homeThunk";

const initialState = {
  banner: [],
  loading: false,
  error: null,
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
      });
  },
});

export const useBanner = () => useSelector((state) => state.banner);
export default bannerSlice.reducer;
