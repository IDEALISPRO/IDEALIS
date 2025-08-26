import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { savedSearchedGet } from "./savedSearchesThunks";

const initialState = {
  savedSearched: [],
  loading: false,
  error: null,
};

const savedSearchedSlice = createSlice({
  name: "videoTutorials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(savedSearchedGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(savedSearchedGet.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.savedSearched = payload;
    });
    builder.addCase(savedSearchedGet.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const useSavedSearched = () => useSelector((state) => state.savedSearched);
export default savedSearchedSlice.reducer;
