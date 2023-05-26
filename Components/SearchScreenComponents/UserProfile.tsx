import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";
import ImageCache from "../../Controllers/ImageCache";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { OtherUserSlice } from "../../Redux/OtherUser";

interface ItemProps {
  description: string;
  email: string;
  followers: number;
  following: number;
  fullName: string;
  posts: number;
  profilePictureURL: string;
  username: string;
}

interface UserProfileProps {
  item: ItemProps;
}

const UserProfile = ({ item }: UserProfileProps) => {
  const user = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(OtherUserSlice.actions.setOtherUser(item));
        if (item.username != user.username)
          navigation.navigate("OtherUserProfile", {
            userInformation: item,
          });
        //@ts-ignore
        else navigation.navigate("Profile");
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
          paddingBottom: 15,
        }}
      >
        {/* User avatar */}
        <ImageCache
          uri={item.profilePictureURL}
          height={50}
          width={50}
          borderRadius={99}
          imageType="Profile Picture from search filter"
        />
        <View style={{ paddingLeft: 10 }}>
          {/* Username */}
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {item.username}
          </Text>
          {/* Full name */}
          <Text style={{ opacity: 0.4 }}>{item.fullName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserProfile;
