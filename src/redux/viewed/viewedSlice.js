import { createSlice } from "@reduxjs/toolkit";
import { getNoticeId } from "../api/api";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const viewedSlice = createSlice({
  name: "viewed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getNoticeId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNoticeId.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(getNoticeId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const viewedReducer = viewedSlice.reducer;
