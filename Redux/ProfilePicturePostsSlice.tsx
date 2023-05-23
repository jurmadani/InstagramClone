import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImagePayload {
  postID: string;
  imageURL: string;
  peopleThatLiked: string[];
  comments: string[];
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
      let newImagesPushed = 0;
      let found = false;
      state.imagesArray.forEach((image) => {
        if (image.postID === action.payload.postID) {
          if (image.comments.length != action.payload.comments.length) {
            image.comments = action.payload.comments;
            found = true;
          }
          if (
            image.peopleThatLiked.length !=
            action.payload.peopleThatLiked.length
          ) {
            image.peopleThatLiked = action.payload.peopleThatLiked;
            found = true;
          } else found = true;
        }
      });
      if (found === false) {
        state.imagesArray.push(action.payload);
        newImagesPushed = newImagesPushed + 1;
      }
      if (newImagesPushed === 0) console.log("No new images were added");
      else console.log(newImagesPushed + " were added to the array");
    },
    resetInitialState: (state) => {
      state.imagesArray = [];
    },
  },
});
