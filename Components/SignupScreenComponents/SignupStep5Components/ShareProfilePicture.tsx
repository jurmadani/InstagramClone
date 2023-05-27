import { View, Text, Switch, Share } from "react-native";
import React, { useState } from "react";

interface ShareProfilePictureProps {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShareProfilePicture = ({
  isEnabled,
  setIsEnabled,
}: ShareProfilePictureProps) => {
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
