import { configureStore, createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
    name: "authorization",
    initialState: { isLoggedIn: false },
    reducers: {
      login(state) {
        state.isLoggedIn = true;
      },
      logout(state) {
        state.isLoggedIn = false;
      },
    },
  });
  
  export const authorizationActions = authorizationSlice.actions;
  
  export const store = configureStore({
    reducer: authorizationSlice.reducer,
  });
  