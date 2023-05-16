import { View, Text, ScrollView } from "react-native";
import React from "react";
import UserProfilePicture from "../Components/ProfileScreenComponents/UserProfilePicture";
import UserNumbers from "../Components/ProfileScreenComponents/UserNumbers";
import UsernameAndCaption from "../Components/ProfileScreenComponents/UsernameAndCaption";
import ProfileButton from "../Components/ProfileScreenComponents/ProfileButton";
import { Divider } from "@ui-kitten/components";
import UserUploadedPictures from "../Components/ProfileScreenComponents/UserUploadedPictures";

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
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
        <ProfileButton placeholder="Edit" />
        <ProfileButton placeholder="Share account" />
      </View>
      {/* Divider */}
      <Divider style={{ marginTop: 20, height: 1 }} />
      {/* user pictures */}
      <UserUploadedPictures />
    </ScrollView>
  );
};

export default ProfileScreen;
