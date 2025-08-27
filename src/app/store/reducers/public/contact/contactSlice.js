import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { contactGet } from "./contactThunks";

const initialState = {
  contact: [],
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
      });
  },
});

export const useContact = () => useSelector((state) => state.contact);
export default contactSlice.reducer;
