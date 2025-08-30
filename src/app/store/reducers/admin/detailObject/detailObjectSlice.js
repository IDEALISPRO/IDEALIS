
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { detailGet } from "./detailObjectThunk";

const initialState = {
  detail: null,  
  loading: false,
  error: null,
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(detailGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.detail = payload || null;   
      })
      .addCase(detailGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useDetail = () => useSelector((state) => state.detail);
export default detailSlice.reducer;


