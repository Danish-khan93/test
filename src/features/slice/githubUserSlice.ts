import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import axios from "axios";
type INITIALSTATE = {
  gitUsers: [] | any;
  isLoading: boolean;
  isError: null | string;
  modal: boolean;
  singaluser: {} | any;
  id: number;
  
};

export const getGitUsers = createAsyncThunk(
  "gitUsers/getGitUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(" https://api.github.com/users", {
        headers: {
          Authorization:
            "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",
        },
      });
      console.log(response?.data);
      return response?.data;
    } catch (error) {
      return rejectWithValue;
    }
  }
);

const initialState: INITIALSTATE = {
  gitUsers: [],
  isLoading: false,
  isError: null,
  modal: false,
  singaluser: {},
  id: 0,
};

const gitUsersSlice = createSlice({
  name: "gitUsers",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.modal = true;
      state.id = payload;
      state.singaluser = state.gitUsers.find(
          (value: any) => value.id === payload
          );
        },
        closeModal: (state) => {
            state.modal = false;
            state.id = 0;
        },
  },
  extraReducers: (builder) => {
    builder.addCase(getGitUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGitUsers.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.gitUsers = [...state.gitUsers, ...payload];
    });
    builder.addCase(getGitUsers.rejected, (state) => {
      state.isError = "their is some error";
    });
  },
});

export default gitUsersSlice.reducer;
export const { openModal, closeModal } = gitUsersSlice.actions;
