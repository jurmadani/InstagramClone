import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ImageCache from "../../Controllers/ImageCache";
import { useDispatch, useSelector } from "react-redux";
import { OtherUserSlice } from "../../Redux/OtherUser";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

const UserProfile = ({ item }: any) => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(OtherUserSlice.actions.setOtherUser(item.item));
        if (item.item.username != user.username)
          navigation.navigate("OtherUserProfile", {
            userInformation: item.item,
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
          marginTop: 13,
        }}
      >
        {/* User avatar */}
        <ImageCache
          uri={item.item.profilePictureURL}
          height={50}
          width={50}
          borderRadius={99}
          imageType="Profile Picture from search filter"
        />
        <View style={{ paddingLeft: 10 }}>
          {/* Username */}
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {item.item.username}
          </Text>
          {/* Full name */}
          <Text style={{ opacity: 0.4 }}>{item.item.fullName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserProfile;
