import { configureStore } from "@reduxjs/toolkit";
import { SignupProcessSlice } from "./SignupProcessSlice";
import { UserSlice } from "./User";
import { SharePostSlice } from "./SharePostSlice";
import { ProfilePicturePostsSlice } from "./ProfilePicturePostsSlice";
import { EditAccountSlice } from "./EditAccoutSlice";
import { OtherUserSlice } from "./OtherUser";
import { HomescreenPostsSlice } from "./HomescreenPosts";

export const Store = configureStore({
  reducer: {
    SignupProcess: SignupProcessSlice.reducer,
    User: UserSlice.reducer,
    SharePost: SharePostSlice.reducer,
    ProfilePosts: ProfilePicturePostsSlice.reducer,
    EditAccount: EditAccountSlice.reducer,
    OtherUser: OtherUserSlice.reducer,
    HomescreenPosts: HomescreenPostsSlice.reducer,
  },
});
