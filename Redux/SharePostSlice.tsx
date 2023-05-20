import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postDescription: "",
  postImage: "",
  shareButtonActive: true,
};

export const SharePostSlice = createSlice({
  name: "SharePost",
  initialState,
  reducers: {
    setShareButtonStatus: (state, action) => {
      state.shareButtonActive = action.payload;
    },
    setPostDescription: (state, action) => {
      state.postDescription = action.payload;
    },
    setPostImage: (state, action) => {
      state.postImage = action.payload;
    },
    resetInitialState: (state) => {
      state.postDescription = "";
      state.postImage = "";
    },
  },
});
