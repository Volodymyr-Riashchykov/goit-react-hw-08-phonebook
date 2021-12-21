import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-opertions";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingPage: false,
  isPending: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isPending = false;
    },
    [authOperations.register.pending](state, _) {
      state.isPending = true;
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.isPending = false;
      state.error = action.payload;
      alert("Такой пользователь уже есть.");
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isPending = false;
    },
    [authOperations.logIn.pending](state, _) {
      state.isPending = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.token = null;
      state.error = action.payload
      alert("Данные введены неверно.")
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isPending = false;
    },
    [authOperations.logOut.pending](state, _) {
      state.isPending = true;
      state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
      alert("Что то пошло не так.");
    },
    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshingPage = true;
      state.error = null;
    },

    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingPage = false;
      state.error = null;
      state.isPending = false;
    },
    [authOperations.getCurrentUser.rejected](state,action) {
      state.isRefreshingPage = false;
      if(action.payload){
        state.error = action.payload;
        alert("Попробуйте еще раз.");}
      
    },
  },
});

export default authSlice.reducer;