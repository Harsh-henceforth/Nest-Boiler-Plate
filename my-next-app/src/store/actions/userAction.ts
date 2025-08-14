import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiConstants } from "../../utils/constants/api.constants";
import service from "@/service";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async (_, thunkAPI) => {
  try {
    const response = await service.get(ApiConstants.USERS.LIST);
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Failed to fetch users");
  }
});

export const createUser = createAsyncThunk("user/createUser", async (userData, thunkAPI) => {
  try {
    const response = await service.post(ApiConstants.USERS.CREATE, userData);
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Failed to create user");
  }
});
