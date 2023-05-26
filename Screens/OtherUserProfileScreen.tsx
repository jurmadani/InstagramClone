import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "@ui-kitten/components";
import { firebase } from "../firebase";
import OtherUserProfilePicture from "../Components/OtherUserProfileScreenComponents/OtherUserProfilePicture";
import OtherUserNumbers from "../Components/OtherUserProfileScreenComponents/OtherUserNumbers";
import OtherUsernameAndCaption from "../Components/OtherUserProfileScreenComponents/OtherUsernameAndCaption";
import FollowOrUnfollowButton from "../Components/OtherUserProfileScreenComponents/FollowOrUnfollowButton";
import MessageOtherUserButton from "../Components/OtherUserProfileScreenComponents/MessageOtherUserButton";
import { useDispatch, useSelector } from "react-redux";
import OtherUserUploadedPictures from "../Components/OtherUserProfileScreenComponents/OtherUserUploadedPictures";
import { OtherUserSlice } from "../Redux/OtherUser";
import { QueryOtherUserPosts } from "../Controllers/QueryOtherUserPosts";

interface OtherUserPostsInterface {
  postID: string;
  author: string;
  comments: string[];
  date: string;
  description: string;
  imageURL: string;
  peopleThatLiked: string[];
  timestamp: string;
}

const OtherUserProfileScreen = ({ route }: any) => {
  const dispatch = useDispatch();
  const otherUser = useSelector(
    //@ts-expect-error
    (state) => state.OtherUser.otherUser
  );
  const [refreshing, setRefreshing] = useState(false);
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [otherUserPosts, setOtherUserPosts] = useState<
    OtherUserPostsInterface[]
  >([]);
  //onRefresh function
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      //get the user information from firestore
      const result = (
        await firebase
          .firestore()
          .collection("Users")
          .doc(otherUser.username)
          .get()
      ).data();
      //update the user global state
      if (result != undefined) {
        dispatch(
          OtherUserSlice.actions.setOtherUser({
            email: result.email,
            fullName: result.fullName,
            profilePictureURL: result.profilePictureURL,
            username: result.username,
            followers: result.followers,
            following: result.following,
            posts: result.posts,
            description: result.description,
          })
        );
      }
      console.log(
        "Refreshed OtherUser global state from the other's user profile screen pull to refresh functionality "
      );
      //get the user posts to display them on profile
      await QueryOtherUserPosts(otherUser.username, setOtherUserPosts).then(
        () => console.log(otherUserPosts)
      );
    } catch (error) {
      console.log(error);
    }
    //unset the refresh
    setRefreshing(false);
  };
  useEffect(() => {
    const FetchOtherUserPosts = async () => {
      setLoadingPhoto(true);
      const task = await firebase.firestore().collection("Posts").get();
      const posts = task.docs.map((doc) => {
        const postData = doc.data();
        return {
          postID: doc.id,
          ...postData,
        };
      });
      const otherUserPosts = posts.filter(
        //@ts-ignore
        (post) => post.author === otherUser.username
      );
      //@ts-ignore
      setOtherUserPosts(otherUserPosts);
    };

    FetchOtherUserPosts().then(() => setLoadingPhoto(false));
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
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
      <OtherUserUploadedPictures
        otherUserPosts={otherUserPosts}
        loadingPhoto={loadingPhoto}
        setOtherUserPosts={setOtherUserPosts}
      />
    </ScrollView>
  );
};

export default OtherUserProfileScreen;
