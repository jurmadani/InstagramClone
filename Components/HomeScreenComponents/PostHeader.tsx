import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Divider } from "@ui-kitten/components";
//@ts-expect-error
import Feather from "react-native-vector-icons/Feather";

const MoreIcon = () => (
  <TouchableOpacity>
    <Feather name="more-horizontal" size={25} />
  </TouchableOpacity>
);

const PostHeader = () => {
  return (
    <View style={{ flexDirection: "row", margin: 13 }}>
      {/* User's profile picture who posted   */}
      <Avatar
        source={require("../../assets/Images/dummy-picture-2.jpg")}
        style={{
          height: 35,
          width: 35,
        }}
      />
      <Text style={{ fontWeight: "600", alignSelf: "center", marginLeft: 10 }}>
        d.jurma
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
