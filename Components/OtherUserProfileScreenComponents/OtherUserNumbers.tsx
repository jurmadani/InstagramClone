import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const OtherUserNumbers = () => {
  const otherUser = useSelector(
    //@ts-expect-error
    (state) => state.OtherUser.otherUser
  );
  return (
    <View style={{ flexDirection: "row", marginLeft: 5 }}>
      {/* Posts */}
      <View style={{ alignItems: "center" }}>
        <Text style={{ opacity: 0.2, fontSize: 16, fontWeight: "700" }}>
          {otherUser.posts}
        </Text>
        <Text>Posts</Text>
      </View>
      {/* Followers */}
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          {otherUser.followers.length}
        </Text>
        <Text>Followers</Text>
      </View>
      {/* Following */}
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          {otherUser.following.length}
        </Text>
        <Text>Following</Text>
      </View>
    </View>
  );
};

export default OtherUserNumbers;
