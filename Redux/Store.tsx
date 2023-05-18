import { configureStore } from "@reduxjs/toolkit";
import { SignupProcessSlice } from "./SignupProcessSlice";

export const Store = configureStore({
  reducer: {
    SignupProcess: SignupProcessSlice.reducer,
  },
});
