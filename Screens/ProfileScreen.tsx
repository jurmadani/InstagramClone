import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useState } from "react";
import UserProfilePicture from "../Components/ProfileScreenComponents/UserProfilePicture";
import UserNumbers from "../Components/ProfileScreenComponents/UserNumbers";
import UsernameAndCaption from "../Components/ProfileScreenComponents/UsernameAndCaption";
import ProfileButton from "../Components/ProfileScreenComponents/ProfileButton";
import { Divider } from "@ui-kitten/components";
import UserUploadedPictures from "../Components/ProfileScreenComponents/UserUploadedPictures";
import { firebase } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../Redux/User";
import { QueryUserPosts } from "../Controllers/QueryUserPosts";
import Modal from "react-native-modal";
import { windowHeight, windowWidth } from "../Constants/Dimensions";

const ProfileScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  const dispatch = useDispatch();
  //onRefresh function
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      //get the user information from firestore
      const result = (
        await firebase.firestore().collection("Users").doc(user.username).get()
      ).data();
      //update the user global state
      if (result != undefined) {
        dispatch(
          UserSlice.actions.setUser({
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
        "Refreshed user global state from the profile screen pull to refresh functionality "
      );
      //get the user posts to display them on profile
      await QueryUserPosts(user.username, dispatch);
    } catch (error) {
      console.log(error);
    }
    //unset the refresh
    setRefreshing(false);
  };
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* User profile picture */}
        <UserProfilePicture />
        {/* User statistics: posts, following/followers number */}
        <UserNumbers />
      </View>
      {/* Username + description */}
      <UsernameAndCaption />
      {/* Butoanele pentru profil : Editeaza si distrbuie profilul */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ProfileButton placeholder="Edit" actionType="EditAccount" />
        <ProfileButton placeholder="Share account" actionType="ShareAccount" />
      </View>
      {/* Divider */}
      <Divider style={{ marginTop: 20, height: 1, marginBottom: 1 }} />
      {/* user pictures */}
      <UserUploadedPictures />
      
    </ScrollView>
  );
};

export default ProfileScreen;
