import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { videoTutorialsGet } from "./videoTutorialsThunks";

const initialState = {
  videos: [],
  loading: false,
  error: null,
};

const videoTutorialsSlice = createSlice({
  name: "videoTutorials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(videoTutorialsGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(videoTutorialsGet.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.videos = payload;
    });
    builder.addCase(videoTutorialsGet.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const useVideoTutorials = () => useSelector((state) => state.videoTutorials);
export default videoTutorialsSlice.reducer;
