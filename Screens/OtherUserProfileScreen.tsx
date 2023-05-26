import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "@ui-kitten/components";
import { firebase } from "../firebase";
import OtherUserProfilePicture from "../Components/OtherUserProfileScreenComponents/OtherUserProfilePicture";
import OtherUserNumbers from "../Components/OtherUserProfileScreenComponents/OtherUserNumbers";
import OtherUsernameAndCaption from "../Components/OtherUserProfileScreenComponents/OtherUsernameAndCaption";
import FollowOrUnfollowButton from "../Components/OtherUserProfileScreenComponents/FollowOrUnfollowButton";
import MessageOtherUserButton from "../Components/OtherUserProfileScreenComponents/MessageOtherUserButton";
import { useSelector } from "react-redux";
import OtherUserUploadedPictures from "../Components/OtherUserProfileScreenComponents/OtherUserUploadedPictures";

interface OtherUserPostsInterface {
  author: string;
  comments: string[];
  date: string;
  description: string;
  imageURL: string;
  peopleThatLiked: string[];
  timestamp: string;
}

const OtherUserProfileScreen = ({ route }: any) => {
  const otherUser = useSelector(
    //@ts-expect-error
    (state) => state.OtherUser.otherUser
  );
  const [refreshing, setRefreshing] = useState(false);
  const [otherUserPosts, setOtherUserPosts] = useState<
    OtherUserPostsInterface[]
  >([]);
  //onRefresh function

  useEffect(() => {
    const FetchOtherUserPosts = async () => {
      const task = await firebase.firestore().collection("Posts").get();
      const posts = task.docs.map((doc) => doc.data());
      const otherUserPosts = posts.filter(
        (post) => post.author === otherUser.username
      );
      //@ts-ignore
      setOtherUserPosts(otherUserPosts);
    };

    FetchOtherUserPosts();
  }, []);

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
        <MessageOtherUserButton />
      </View>
      {/* Divider */}
      <Divider style={{ marginTop: 20, height: 1, marginBottom: 1 }} />
      {/* user pictures */}
      <OtherUserUploadedPictures otherUserPosts={otherUserPosts} />
    </ScrollView>
  );
};

export default OtherUserProfileScreen;
