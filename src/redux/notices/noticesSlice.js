import { createSlice } from "@reduxjs/toolkit";
import { getNotices } from "../api/api";

const initialState = {
  page: 1,
  perPage: 6,
  totalPages: 1,
  keyword: "",
  items: [],
  isLoading: false,
  errorMessage: null,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotices.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getNotices.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
export const { setPage } = noticesSlice.actions;
