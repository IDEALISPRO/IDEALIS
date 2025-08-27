import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { headerGet } from "./headerThunk";



const initialState = {
  header: null,  
  loading: false,
  error: null,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(headerGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(headerGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.header = payload[0] || null;
      })
      .addCase(headerGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useHeader = () => useSelector((state) => state.header);
export default headerSlice.reducer;
