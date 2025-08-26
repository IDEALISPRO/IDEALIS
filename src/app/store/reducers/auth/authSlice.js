import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { getUser, updateUser, userLogin } from "./authThunks";
const initialState = {
  loading: false,
  login: null,
  access: Cookies.get("token") || null,
  refresh: Cookies.get("refresh") || null,
  role: Cookies.get("role") || null,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.login = null;
      state.access = null;
      state.refresh = null;
      state.role = null;
      Cookies.remove("token");
      Cookies.remove("refresh");
      Cookies.remove("role");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.login = payload;
        state.refresh = payload?.refresh;
        state.access = payload?.access;
        state.role = payload?.role;
        Cookies.set("token", payload?.access);
        Cookies.set("refresh", payload?.refresh);
        Cookies.set("role", payload?.role);
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout } = authSlice.actions;
export const useAuth = () => useSelector((state) => state.auth);
export default authSlice.reducer;
