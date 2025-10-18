import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "../api/api";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: null,
};

const newsSlice = createSlice({
  name: "friends",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      });
  },
});

export const friendsReducer = newsSlice.reducer;
