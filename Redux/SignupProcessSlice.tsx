import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScreen: 1,
};

export const SignupProcessSlice = createSlice({
  name: "SignupProcess",
  initialState,
  reducers: {
    setCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
  },
});
