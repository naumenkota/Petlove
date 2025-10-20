import {
  getCategoriesOption,
  getSexOption,
  getSpeciesOption,
} from "../api/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sexOption: [],
  categoriesOption: [],
  speciesOption: [],
  selectedSex: "",
  selectedSpecies: "",
  selectedCategory: "",
  sortBy: "popularity",
  location: null,
  keyword: "",
  isLoading: false,
  errorMessage: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedSex: (state, action) => {
      state.selectedSex = action.payload;
    },
    setSelectedSpecies: (state, action) => {
      state.selectedSpecies = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    resetFilters: (state) => {
      state.selectedSex = "";
      state.selectedSpecies = "";
      state.selectedCategory = "";
      state.sortBy = "popularity";
      state.location = null;
      state.keyword = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSexOption.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSexOption.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sexOptions = action.payload;
      })
      .addCase(getSexOption.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getSpeciesOption.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSpeciesOption.fulfilled, (state, action) => {
        state.isLoading = false;
        state.speciesOptions = action.payload;
      })
      .addCase(getSpeciesOption.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getCategoriesOption.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoriesOption.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoriesOption = action.payload;
      })
      .addCase(getCategoriesOption.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const {
  setSelectedSex,
  setSelectedSpecies,
  setSelectedCategory,
  setSortBy,
  setLocation,
  setKeyword,
  resetFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
