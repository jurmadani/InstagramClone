import { configureStore } from "@reduxjs/toolkit";
import { SignupProcessSlice } from "./SignupProcessSlice";
import { UserSlice } from "./User";
import { SharePostSlice } from "./SharePostSlice";

export const Store = configureStore({
  reducer: {
    SignupProcess: SignupProcessSlice.reducer,
    User: UserSlice.reducer,
    SharePost: SharePostSlice.reducer,
  },
});
