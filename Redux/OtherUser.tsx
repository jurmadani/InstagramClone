import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otherUser: null,
};

export const OtherUserSlice = createSlice({
  name: "OtherUser",
  initialState,
  reducers: {
    setOtherUser: (state, action) => {
      state.otherUser = action.payload;
      console.log("Redux updated OtherUser global state to: ", state.otherUser);
    },
  },
});
