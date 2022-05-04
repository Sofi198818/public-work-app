import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://publicworkapi.moh.gov.ge/Test";

const initialState = {
  getUser: {},
  isLoggedIn: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.loading = false;
    },
  },
  extraReducers: {},
});

export default authSlice.reducer;
