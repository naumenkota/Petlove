import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, removeFavorite, getUser } from "../api/api";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add favorite";
      })
      .addCase(removeFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.loading = false;
        const removedId = action.payload?._id || action.meta.arg;
        state.items = state.items.filter((item) => item._id !== removedId);
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to remove favorite";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.items = action.payload.noticesFavorites || [];
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
