import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Divider } from "@ui-kitten/components";
import Feather from "react-native-vector-icons/Feather";
import { InstagramPostProps } from "../HomeScreenComponents/InstagramPost";

const MoreIcon = () => (
  <TouchableOpacity>
    <Feather name="more-horizontal" size={25} />
  </TouchableOpacity>
);

const PostHeader = ({ userAvatar, username }: InstagramPostProps) => {
  return (
    <View style={{ flexDirection: "row", margin: 13 }}>
      {/* User's profile picture who posted   */}
      <Avatar
        source={{ uri: userAvatar }}
        style={{
          height: 35,
          width: 35,
        }}
      />
      <Text style={{ fontWeight: "600", alignSelf: "center", marginLeft: 10 }}>
        {username}
      </Text>
      {/* More icon */}
      <View
        style={{
          alignSelf: "center",
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <MoreIcon />
      </View>
    </View>
  );
};

export default PostHeader;
