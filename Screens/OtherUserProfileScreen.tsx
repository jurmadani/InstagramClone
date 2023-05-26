import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "@ui-kitten/components";
import UserUploadedPictures from "../Components/ProfileScreenComponents/UserUploadedPictures";
import { firebase } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../Redux/User";
import { QueryUserPosts } from "../Controllers/QueryUserPosts";
import { OtherUserSlice } from "../Redux/OtherUser";
import OtherUserProfilePicture from "../Components/OtherUserProfileScreenComponents/OtherUserProfilePicture";
import OtherUserNumbers from "../Components/OtherUserProfileScreenComponents/OtherUserNumbers";
import OtherUsernameAndCaption from "../Components/OtherUserProfileScreenComponents/OtherUsernameAndCaption";
import FollowOrUnfollowButton from "../Components/OtherUserProfileScreenComponents/FollowOrUnfollowButton";
import MessageOtherUserButton from "../Components/OtherUserProfileScreenComponents/MessageOtherUserButton";

const OtherUserProfileScreen = ({ route }: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  //onRefresh function

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      refreshControl={<RefreshControl refreshing={refreshing} />}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* User profile picture */}
        <OtherUserProfilePicture />
        {/* User statistics: posts, following/followers number */}
        <OtherUserNumbers />
      </View>
      {/* Username + description */}
      <OtherUsernameAndCaption />
      {/* Butoanele pentru profil : Editeaza si distrbuie profilul */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <FollowOrUnfollowButton />
        <MessageOtherUserButton/>
      </View>
      {/* Divider */}
      <Divider style={{ marginTop: 20, height: 1, marginBottom: 1 }} />
      {/* user pictures */}
    </ScrollView>
  );
};

export default OtherUserProfileScreen;
