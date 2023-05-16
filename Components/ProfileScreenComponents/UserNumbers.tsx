import { View, Text } from "react-native";
import React from "react";

const UserNumbers = () => {
  return (
    <View style={{ flexDirection: "row", marginLeft: 5 }}>
      {/* Posts */}
      <View style={{ alignItems: "center" }}>
        <Text style={{ opacity: 0.2, fontSize: 16, fontWeight: "700" }}>0</Text>
        <Text>Posts</Text>
      </View>
      {/* Followers */}
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>834</Text>
        <Text>Followers</Text>
      </View>
      {/* Following */}
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>163</Text>
        <Text>Following</Text>
      </View>
    </View>
  );
};

export default UserNumbers;
