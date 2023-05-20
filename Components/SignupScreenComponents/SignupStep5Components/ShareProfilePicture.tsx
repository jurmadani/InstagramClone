import { View, Text, Switch } from "react-native";
import React, { useState } from "react";

const ShareProfilePicture = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 15 }}>Also share this photo as a post</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ marginLeft: 20 }}
      />
    </View>
  );
};

export default ShareProfilePicture;
