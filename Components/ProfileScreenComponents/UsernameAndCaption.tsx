import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const UsernameAndCaption = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  return (
    <View style={{ marginLeft: 20 }}>
      {/* Full name */}
      <Text style={{ fontWeight: "600", fontSize: 15 }}>{user.fullName}</Text>
      {/* description */}
      <Text style={{ marginTop: 5 }}>{user.description}</Text>
    </View>
  );
};

export default UsernameAndCaption;
