import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { contactBannerGet, contactGet } from "./contactThunks";

const initialState = {
  contact: [],
  contactBanner: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contact = payload;
      })
      .addCase(contactGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(contactBannerGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactBannerGet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contactBanner = payload;
      })
      .addCase(contactBannerGet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const useContact = () => useSelector((state) => state.contact);
export default contactSlice.reducer;
