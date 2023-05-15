import { View, Text } from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../../Constants/Dimensions";

const SimpleDivider = () => {
  return (
    <View
      style={{
        backgroundColor: "#E1E1E1",
        height: 1,
        width: windowWidth,
        top: windowHeight / 5.7,
      }}
    />
  );
};

export default SimpleDivider;
