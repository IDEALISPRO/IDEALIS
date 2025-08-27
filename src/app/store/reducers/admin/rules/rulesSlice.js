import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { rulesGet } from "./rulesThunks";

const initialState = {
  rules: [],
  loading: false,
  error: null,
};

const rulesSlice = createSlice({
  name: "rules",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(rulesGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(rulesGet.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.rules = payload;
    });
    builder.addCase(rulesGet.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const useRules = () => useSelector((state) => state.rules);
export default rulesSlice.reducer;
