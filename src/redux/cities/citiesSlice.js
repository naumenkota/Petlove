import { createSlice } from "@reduxjs/toolkit";
import { getCities, getLocations } from "../api/api";

const initialState = {
  keyword: "",
  items: [],
  isLoading: false,
  errorMessage: null,
  selectedCity: null,
  locations: [],
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(getLocations.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = action.payload;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
      });
  },
});

export const citiesReducer = citiesSlice.reducer;
export const { setKeyword, setSelectedCity } = citiesSlice.actions;
