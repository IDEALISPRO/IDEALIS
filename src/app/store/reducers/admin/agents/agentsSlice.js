import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { agentsGet } from "./agentsThunks";

const initialState = {
  agents: [],
  loading: false,
  error: null,
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(agentsGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(agentsGet.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.agents = payload;
    });
    builder.addCase(agentsGet.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const useAgents = () => useSelector((state) => state.agents);
export default agentsSlice.reducer;
