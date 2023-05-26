import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const OtherUsernameAndCaption = () => {
  const otherUser = useSelector(
    //@ts-expect-error
    (state) => state.OtherUser.otherUser
  );
  return (
    <View style={{ marginLeft: 20 }}>
      {/* Full name */}
      <Text style={{ fontWeight: "600", fontSize: 15 }}>
        {otherUser.fullName}
      </Text>
      {/* description */}
      <Text style={{ marginTop: 5 }}>{otherUser.description}</Text>
    </View>
  );
};

export default OtherUsernameAndCaption;
