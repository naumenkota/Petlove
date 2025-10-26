import { createSlice } from "@reduxjs/toolkit";
import { login, registration, logout, getUser } from "../api/api";

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    avatar: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
