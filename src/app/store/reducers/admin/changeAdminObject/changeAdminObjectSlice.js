import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { objectIdThunk } from "./changeAdminObjectThunks";

const initialState = {
  detail: null,
  loading: false,
  error: null,
};

const detailObjectSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(objectIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(objectIdThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.detail = payload || null;
      })
      .addCase(objectIdThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useDetailObject = () => useSelector((state) => state.detailObject);
export default detailObjectSlice.reducer;
