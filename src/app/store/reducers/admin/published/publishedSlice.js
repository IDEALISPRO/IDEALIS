import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  getSavedSearch,
  getSearchTrending,
  publishedGet,
  publishedGetItem,
} from "./publishedThunk";

const initialState = {
  list: [],
  item: null,
  loading: false,
  error: null,
  searchListTrending: [],
  savedSearch: [],
};

const publishedSlice = createSlice({
  name: "published",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(publishedGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(publishedGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(publishedGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(publishedGetItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(publishedGetItem.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.item = payload;
      })
      .addCase(publishedGetItem.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getSearchTrending.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearchTrending.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.searchListTrending = payload;
      })
      .addCase(getSearchTrending.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getSavedSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSavedSearch.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.savedSearch = payload;
      })
      .addCase(getSavedSearch.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const usePublished = () => useSelector((state) => state.published);
export default publishedSlice.reducer;
