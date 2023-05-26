import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { useSelector } from "react-redux";

const onPressHandler = () => {};

const FollowOrUnfollowButton = () => {
  const [
    doesCurrentUserLoggedinFollowOtherUser,
    setCurrentUserLoggedinFollowOtherUser,
  ] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const currentUserLoggedIn = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );
  const otherUser = useSelector(
    (state) =>
      //@ts-ignore
      state.OtherUser.otherUser
  );

  useEffect(() => {
    setCurrentUserLoggedinFollowOtherUser(
      otherUser?.followers.includes(currentUserLoggedIn.username)
    );
  }, []);

  return (
    <TouchableOpacity onPress={() => onPressHandler()}>
      <View
        style={{
          backgroundColor: doesCurrentUserLoggedinFollowOtherUser
            ? "#E1E1E1"
            : "#3797EF",
          height: 33,
          width: windowWidth / 2 - 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          marginHorizontal: 5,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: doesCurrentUserLoggedinFollowOtherUser ? "black" : "white",
          }}
        >
          {doesCurrentUserLoggedinFollowOtherUser ? "Unfollow" : "Follow"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FollowOrUnfollowButton;
