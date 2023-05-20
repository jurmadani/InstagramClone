import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("Redux updated User global state to: ", state.user);
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});
