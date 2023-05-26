import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const UserNumbers = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  return (
    <View style={{ flexDirection: "row", marginLeft: 5 }}>
      {/* Posts */}
      <View style={{ alignItems: "center" }}>
        <Text style={{ opacity: 0.2, fontSize: 16, fontWeight: "700" }}>
          {user.posts}
        </Text>
        <Text>Posts</Text>
      </View>
      {/* Followers */}
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          {user.followers.length}
        </Text>
        <Text>Followers</Text>
      </View>
      {/* Following */}
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          {user.following.length}
        </Text>
        <Text>Following</Text>
      </View>
    </View>
  );
};

export default UserNumbers;
