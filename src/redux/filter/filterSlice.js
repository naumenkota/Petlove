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
  byPopularity: null,
  byPrice: null,
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
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setByPopularity(state, action) {
      state.byPopularity = action.payload;
    },
    setByPrice(state, action) {
      state.byPrice = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;

      switch (action.payload) {
        case "popular":
          state.byPopularity = false;
          state.byPrice = null;
          break;
        case "unpopular":
          state.byPopularity = true;
          state.byPrice = null;
          break;
        case "cheap":
          state.byPrice = true;
          state.byPopularity = null;
          break;
        case "expensive":
          state.byPrice = false;
          state.byPopularity = null;
          break;
        default:
          state.byPopularity = null;
          state.byPrice = null;
      }
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
        state.sexOption = action.payload;
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
        state.speciesOption = action.payload;
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
  setKeyword,
  resetFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
