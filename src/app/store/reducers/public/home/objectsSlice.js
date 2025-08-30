import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getCategory, objectsGet } from "./objectsThunks";

const initialState = {
  objects: [],
  loading: false,
  error: null,
  list: [],
};

const objectsSlice = createSlice({
  name: "objects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(objectsGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(objectsGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.objects = payload;
      })
      .addCase(objectsGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(getCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useObjects = () => useSelector((state) => state.objects);
export default objectsSlice.reducer;
