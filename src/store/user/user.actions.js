import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = (userId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Max", userName: "Vasilek" }), 1000)
  );

export const getUserById = createAsyncThunk(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUser(userId);
      return response;
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
