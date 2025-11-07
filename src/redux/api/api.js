import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
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

export const logout = createAsyncThunk(
  "auth/logout",
  async (userInfo, thunkApi) => {
    try {
      await axios.post("/users/signout", userInfo);
      clearAuthHeader();
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;
  setAuthHeader(token);
  try {
    const response = await axios.get("/users/current/full");
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response?.data?.message);
  }
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (formData, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    setAuthHeader(token);
    try {
      const response = await axios.patch("/users/current/edit", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

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
    {
      page = 1,
      limit: perPage,
      keyword = "",
      category,
      sex,
      species,
      byPopularity,
      byPrice,
      locationId,
    },
    thunkApi
  ) => {
    try {
      const response = await axios.get("/notices", {
        params: {
          page,
          perPage,
          keyword,
          category,
          sex,
          species,
          byPopularity,
          byPrice,
          locationId,
        },
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

export const addFavorite = createAsyncThunk(
  "favorites/add",
  async ({ id, item }, thunkApi) => {
    try {
      await axios.post(`/notices/favorites/add/${id}`);
      return item;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/remove",
  async (id, thunkApi) => {
    try {
      await axios.delete(`/notices/favorites/remove/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const addPet = createAsyncThunk(
  "pets/addPet",
  async (petData, thunkApi) => {
    try {
      const response = await axios.post("/users/current/pets/add", petData);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const removePet = createAsyncThunk(
  "pets/removePet",
  async (id, thunkApi) => {
    try {
      await axios.delete(`/users/current/pets/remove/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getNoticeId = createAsyncThunk(
  "notice/getNoticeId",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data?.message);
    }
  }
);
