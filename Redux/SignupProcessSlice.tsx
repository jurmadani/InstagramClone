import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScreen: 1,
};

export const SignupProcessSlice = createSlice({
  name: "SignupProcess",
  initialState,
  reducers: {
    setCurrentScreen: (state, action) => {
      if (action.payload === 5) console.log("sign up process completed");
      else state.currentScreen = action.payload;
    },
  },
});
