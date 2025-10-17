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
