import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "../api/api";

const initialState = {
  page: 1,
  perPage: 6,
  totalPages: 1,

  keyword: "",
  items: [],
  isLoading: false,
  errorMessage: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      });
  },
});

export const newsReducer = newsSlice.reducer;
export const { setPage } = newsSlice.actions;
