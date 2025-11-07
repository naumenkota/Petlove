import { createSlice } from "@reduxjs/toolkit";
import { getNoticeId } from "../api/api";

const saved = JSON.parse(localStorage.getItem("viewed")) || [];

const initialState = {
  items: saved,
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
        const exists = state.items.some(
          (item) => item._id === action.payload._id
        );
        if (!exists) {
          state.items.push(action.payload);
          localStorage.setItem("viewed", JSON.stringify(state.items));
        }
      })
      .addCase(getNoticeId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const viewedReducer = viewedSlice.reducer;
