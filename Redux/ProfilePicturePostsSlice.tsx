import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImagePayload {
  postID: string;
  imageURL: string;
  peopleThatLiked: string[];
  date: string;
  description: string;
  timestamp: string;
}

interface ProfilePicturePostsState {
  imagesArray: ImagePayload[];
}

const initialState: ProfilePicturePostsState = {
  imagesArray: [],
};

export const ProfilePicturePostsSlice = createSlice({
  name: "ProfilePosts",
  initialState,
  reducers: {
    pushImageIntoArray: (state, action: PayloadAction<ImagePayload>) => {
      state.imagesArray.push(action.payload);
    },
    resetInitialState: (state) => {
      state.imagesArray = [];
    },
  },
});
