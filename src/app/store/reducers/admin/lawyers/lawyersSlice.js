import { createSlice } from "@reduxjs/toolkit";
import { lawyersGet } from "./lawyersThunk";
import { useSelector } from "react-redux";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const lawyersSlice = createSlice({
  name: "lawyer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(lawyersGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(lawyersGet.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(lawyersGet.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const useLawyer = () => useSelector((state) => state.lawyer);
export default lawyersSlice.reducer;
