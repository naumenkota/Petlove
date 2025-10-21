import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registration = createAsyncThunk(
  "auth/registration",
  async (userInfo, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkApi) => {
    try {
      const response = await axios.post("/users/signin", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getNews = createAsyncThunk(
  "news/getNews",
  async ({ page = 1, perPage = 6, keyword = "" }, thunkApi) => {
    try {
      const response = await axios.get("/news", {
        params: { page, perPage, keyword },
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getFriends = createAsyncThunk(
  "friends/getFriends",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/friends");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getNotices = createAsyncThunk(
  "notices/getNotices",
  async (
    { page = 1, perPage = 6, keyword = "", category, sex, species },
    thunkApi
  ) => {
    try {
      const response = await axios.get("/notices", {
        params: { page, perPage, keyword, category, sex, species },
      });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getSexOption = createAsyncThunk(
  "filters/getSexOption",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/notices/sex");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getCategoriesOption = createAsyncThunk(
  "filters/getCategoriesOption",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/notices/categories");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getSpeciesOption = createAsyncThunk(
  "filters/getSpeciesOption",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/notices/species");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getCities = createAsyncThunk(
  "cities/getCities",
  async ({ keyword }, thunkApi) => {
    try {
      const response = await axios.get("/cities", { params: { keyword } });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/cities/locations");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);
