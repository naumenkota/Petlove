import { createSlice } from "@reduxjs/toolkit";
import { addPet } from "../api/api";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: null,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPet.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addPet.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      });
  },
});

export const petsReducer = petsSlice.reducer;
