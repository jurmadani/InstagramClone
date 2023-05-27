import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommentsArrayProps {
  username: string;
  comment: string;
  profilePictureURL: string;
  timestamp: string;
  date: string;
}

interface ImagePayload {
  postID: string;
  imageURL: string;
  peopleThatLiked: string[];
  comments: CommentsArrayProps[];
  date: string;
  description: string;
  timestamp: string;
}

interface HomescreenPostsState {
  homescreenPostsArray: ImagePayload[];
}

const initialState: HomescreenPostsState = {
  homescreenPostsArray: [],
};

export const HomescreenPostsSlice = createSlice({
  name: "HomescreenPosts",
  initialState,
  reducers: {
    pushPostIntoArray: (state, action: PayloadAction<ImagePayload>) => {
      state.homescreenPostsArray.push(action.payload);
    },
    resetInitialState: (state) => {
      state.homescreenPostsArray = [];
    },
    addNewPeopleThatLiked: (
      state,
      action: PayloadAction<{ postID: string; peopleThatLiked: string[] }>
    ) => {
      const { postID, peopleThatLiked } = action.payload;

      state.homescreenPostsArray.forEach((image) => {
        if (image.postID === postID) {
          image.peopleThatLiked = peopleThatLiked;
        }
      });
    },

    removePeopleThatLiked: (
      state,
      action: PayloadAction<{ postID: string; peopleThatLiked: string[] }>
    ) => {
      const { postID, peopleThatLiked } = action.payload;

      state.homescreenPostsArray.forEach((image) => {
        if (image.postID === postID) {
          image.peopleThatLiked = peopleThatLiked;
        }
      });
    },
  },
});
